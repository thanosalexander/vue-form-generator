<template>
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
		</label>
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
