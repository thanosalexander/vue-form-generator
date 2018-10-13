<template lang="pug">
div.wrapper
	input.form-control(type="text", v-model="value", :autocomplete="schema.autocomplete", :disabled="disabled", :placeholder="schema.placeholder", :readonly="schema.readonly", :name="schema.inputName", :id="getFieldID(schema)")
	label(v-if="fieldTypeHasLabel(schema)",:for="getFieldID(schema)",:class="schema.labelClasses")
		span(v-html="schema.label")
			i.icon
			div.helpText(v-html='schema.help')
	span.helper(v-if="schema.inputType.toLowerCase() === 'color' || schema.inputType.toLowerCase() === 'range'") | {{value}}
</template>

<script>
/* global $ */
import abstractField from "../abstractField";

export default {
	mixins: [abstractField],

	mounted() {
		this.$nextTick(function() {
			if (window.$ && window.$.fn.mask) {
				$(this.$el)
					.unmask()
					.mask(this.schema.mask, this.schema.maskOptions);
			} else {
				console.warn(
					"JQuery MaskedInput library is missing. Please download from https://github.com/digitalBush/jquery.maskedinput and load the script in the HTML head section!"
				);
			}
		});
	},

	beforeDestroy() {
		if (window.$ && window.$.fn.mask) $(this.$el).unmask();
	}
};
</script>

<style lang="scss">

</style>
