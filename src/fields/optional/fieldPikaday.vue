<template lang="pug">
div.wrapper
	input.form-control(type="text", v-model="value", :autocomplete="schema.autocomplete", :disabled="disabled", :placeholder="schema.placeholder", :readonly="schema.readonly", :name="schema.inputName")
	label.control-label(v-if="fieldTypeHasLabel(schema)",:for="getFieldID(schema)",:class="schema.labelClasses")
			| {{schema.label}}
			span(v-html="schema.label")
				i.icon
				div.helpText(v-html='schema.help')
</template>

<script>
import abstractField from "../abstractField";
import { defaults } from "lodash";
import dateFieldHelper from "../../utils/dateFieldHelper";

let inputFormat = "YYYY-MM-DD";

export default {
	mixins: [abstractField],
	data() {
		return { picker: null };
	},

	methods: {
		getDateFormat() {
			if (this.schema.pikadayOptions && this.schema.pikadayOptions.format) return this.schema.pikadayOptions.format;
			else return inputFormat;
		},

		...dateFieldHelper
	},

	mounted() {
		this.$nextTick(() => {
			if (window.Pikaday) {
				this.picker = new window.Pikaday(
					defaults(this.schema.pikadayOptions || {}, {
						field: this.$el, // bind the datepicker to a form field
						onSelect: () => {
							this.value = this.picker.toString();
						}
						// trigger: , // use a different element to trigger opening the datepicker, see [trigger example][] (default to `field`)
					})
				);
			} else {
				console.warn("Pikaday is missing. Please download from https://github.com/dbushell/Pikaday/ and load the script and CSS in the HTML head section!");
			}
		});
	},

	beforeDestroy() {
		if (this.picker) this.picker.destroy();
	}
};
</script>


<style lang="scss">

</style>
