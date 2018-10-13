<template lang="pug">
.wrapper(v-attributes="'wrapper'")
	textarea.form-control(
		v-model="value",
		:id="getFieldID(schema)",
		:class="schema.fieldClasses",
		:disabled="disabled",
		:maxlength="schema.max",
		:minlength="schema.min",
		:placeholder="schema.placeholder",
		:readonly="schema.readonly",
		:required="schema.required",
		:rows="schema.rows || 2",
		:name="schema.inputName",
		v-attributes="'input'")
	label.control-label(v-if="fieldTypeHasLabel(schema)",:for="getFieldID(schema)",:class="schema.labelClasses")
		| {{schema.label}}
		span(v-html="schema.label")
			i.icon
			div.helpText(v-html='schema.help')
</template>

<script>
import abstractField from "../abstractField";

export default {
	mixins: [abstractField]
};
</script>


<style lang="scss">

</style>
