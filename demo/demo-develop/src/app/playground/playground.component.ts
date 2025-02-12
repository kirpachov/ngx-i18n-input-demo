import { ChangeDetectorRef, Component, inject, OnInit, Query, QueryList, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly router: Router = inject(Router);
  private readonly cd: ChangeDetectorRef = inject(ChangeDetectorRef);

  @ViewChildren("inputTemplateOption") inputTemplatesRef?: QueryList<TemplateRef<unknown>>;
  @ViewChildren("labelTemplateOption") labelTemplatesRef?: QueryList<TemplateRef<unknown>>;

  translatedText: any;

  readonly configs: FormGroup<{
    layout: FormControl<"tabs" | "vertical" | null>,
    required: FormControl<boolean | null>,
    autofocus: FormControl<boolean | null>,
    validators: FormControl<number | null>,
    hideLabels: FormControl<boolean | null>,
    languages: FormControl<string[] | null>,
    inputTemplate: FormControl<number | null>,
    labelTemplate: FormControl<number | null>,
    label: FormControl<string | null>,
  }> = new FormGroup<{
    layout: FormControl<"tabs" | "vertical" | null>,
    required: FormControl<boolean | null>,
    autofocus: FormControl<boolean | null>,
    validators: FormControl<number | null>,
    hideLabels: FormControl<boolean | null>,
    languages: FormControl<string[] | null>,
    inputTemplate: FormControl<number | null>,
    labelTemplate: FormControl<number | null>,
    label: FormControl<string | null>,
  }>({
    layout: new FormControl<"tabs" | "vertical">(this.route.snapshot.queryParams["layout"] || "tabs"),
    required: new FormControl<boolean>(this.route.snapshot.queryParams["required"] === "true"),
    autofocus: new FormControl<boolean>(this.route.snapshot.queryParams["autofocus"] === "true"),
    validators: new FormControl<number | null>(this.route.snapshot.queryParams["validators"] || null),
    hideLabels: new FormControl<boolean>(this.route.snapshot.queryParams["hideLabels"] === "true"),
    languages: new FormControl<string[]>(this.route.snapshot.queryParams["languages"]?.split(",") || ["en", "it", "es", "de"]),
    inputTemplate: new FormControl<number | null>(this.route.snapshot.queryParams["inputTemplate"] || null),
    labelTemplate: new FormControl<number | null>(this.route.snapshot.queryParams["labelTemplate"] || null),
    label: new FormControl<string | null>(this.route.snapshot.queryParams["label"] || ""),
  });

  ngOnInit(): void {
    this.configs.valueChanges.subscribe((value: Record<string, unknown>) => {
      const merged: Record<string, string | number | boolean> = {};

      Object.keys(value).forEach((key: string) => {
        const v: unknown = value[key];

        if (Array.isArray(v)) merged[key] = (v as string[]).join(",");
        else if (typeof v === "boolean" || typeof v === "number" || typeof v === "string") merged[key] = v.toString();
        else if (typeof v === "object") merged[key] = JSON.stringify(v);
        else console.warn(`When updating query params: Unknown type for ${key}: ${typeof v}`);
      });

      this.router.navigate([], {
        queryParams: merged,
        queryParamsHandling: "merge",
      });
    });
  }

  ngAfterViewInit(): void {
    this.inputTemplatesRef?.forEach((template: TemplateRef<unknown>, index: number) => {
      this.inputTemplates.push(template);
    });

    this.labelTemplatesRef?.forEach((template: TemplateRef<unknown>, index: number) => {
      this.labelTemplates.push(template);
    });
  }

  reloadCurrentPage() {
    window.location.reload();
  }

  readonly validatorOptions: ValidatorFn[][] = [
    [],
    [(a: AbstractControl): ValidationErrors | null => a.value === "a" ? null : { a: true }],
    [(a: AbstractControl): ValidationErrors | null => typeof a.value === "string" && a.value.length === 3 ? null : { length: true }],
  ];

  readonly inputTemplates: (TemplateRef<unknown> | null)[] = [
    null,
  ]

  readonly labelTemplates: (TemplateRef<unknown> | null)[] = [
    null,
  ];

  detectChanges(): void {
    this.cd.detectChanges();
  }
}
