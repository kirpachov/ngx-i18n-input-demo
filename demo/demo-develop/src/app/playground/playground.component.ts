import { Component, inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly router: Router = inject(Router);

  translatedText: any;

  readonly configs: FormGroup<{
    layout: FormControl<"tabs" | "vertical" | null>,
    required: FormControl<boolean | null>,
    autofocus: FormControl<boolean | null>,
    validators: FormControl<number | null>,
  }> = new FormGroup<{
    layout: FormControl<"tabs" | "vertical" | null>,
    required: FormControl<boolean | null>,
    autofocus: FormControl<boolean | null>,
    validators: FormControl<number | null>,
  }>({
    layout: new FormControl<"tabs" | "vertical">(this.route.snapshot.queryParams["layout"] || "tabs"),
    required: new FormControl<boolean>(this.route.snapshot.queryParams["required"] === "true"),
    autofocus: new FormControl<boolean>(this.route.snapshot.queryParams["autofocus"] === "true"),
    validators: new FormControl<number | null>(this.route.snapshot.queryParams["validators"] || null),
  });

  ngOnInit(): void {
    this.configs.valueChanges.subscribe((value: Record<string, string | number | boolean | null>) => {
      this.router.navigate([], {
        queryParams: value,
        queryParamsHandling: "merge",
      });
    });
  }


  readonly validatorOptions: ValidatorFn[][] = [
    [],
    [(a: AbstractControl) => a.value === "a" ? null : { a: true }],
    [(a: AbstractControl) => typeof a.value === "string" && a.value.length === 3 ? null : { length: true }],
  ];
}
