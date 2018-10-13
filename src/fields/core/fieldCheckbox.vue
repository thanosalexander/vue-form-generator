<template>
<div class="wrapper" v-attributes="'input'">
	<div class="checkbox">
		<label>
			<input type="checkbox" 
				:name="schema.inputName"
				:id="getFieldID(schema)"
				v-model="value"
				:autocomplete="schema.autocomplete"
				:disabled="disabled"
				:class="schema.fieldClasses"
				v-attributes="'input'"
			/>
			{{schema.label}}
			<i class="check-box"></i>
		</label>

		<label v-if="fieldTypeHasLabel(schema)" :for="getFieldID(schema)" :class="schema.labelClasses">
				
		<span v-html="schema.label"></span>
		<span v-if='schema.help' class="help">
			<i class="icon"></i>
			<div class="helpText" v-html='schema.help'></div>
		</span>
	</label>

	<span class="helper" v-if="schema.inputType.toLowerCase() === 'color' || schema.inputType.toLowerCase() === 'range'">
		{{value}}
	</span>
	
	</div>		
</div>
</template>

<script>
import abstractField from "../abstractField";

export default {
	mixins: [abstractField]
};
</script>

<style lang="scss">
.vue-form-generator .field-checkbox input {
	margin-left: 12px;
}
</style>
