import {  lessThan, } from "@rxweb/reactive-form-validators"
import {prop} from '@rxweb/reactive-form-validators'
export class User {

	@prop()
	obtainedMarks: number;

	@prop()
	passingMarks: number;

	@prop()
	otherMarks: number;

}
