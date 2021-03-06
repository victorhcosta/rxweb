import {
    AsyncValidatorFn,ValidatorFn
} from "@angular/forms";
import { startsWithValidator } from '../reactive-form-validators/index'
import { AnnotationTypes } from "../core/validator.static"
import { baseValidator, baseAsyncValidatorExtension } from "./base-validator.function";
import { StringComparisonConfig } from "../models/config/string-comparison-config";
import { baseAsyncValidator } from "../reactive-form-validators/async/base.async.validator";

export function startsWithValidatorExtension(config: StringComparisonConfig): ValidatorFn {
  return baseValidator(config, AnnotationTypes.startsWithWith, startsWithValidator(config))
}
export function startsWithAsyncValidatorExtension(config?: StringComparisonConfig): AsyncValidatorFn {
    return baseAsyncValidatorExtension(config, AnnotationTypes.startsWithWith, baseAsyncValidator(config, AnnotationTypes.startsWith));
}
