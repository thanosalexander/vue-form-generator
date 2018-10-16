var VueFormGenerator = window.VueFormGenerator;

var vm = new Vue({
	el: "#app",
	components: {
		"vue-form-generator": VueFormGenerator.component
	},

	methods: {
		prettyJSON: function (json) {
			if (json) {
				json = JSON.stringify(json, undefined, 4);
				json = json.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
				return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
					var cls = "number";
					if (/^"/.test(match)) {
						if (/:$/.test(match)) {
							cls = "key";
						} else {
							cls = "string";
						}
					} else if (/true|false/.test(match)) {
						cls = "boolean";
					} else if (/null/.test(match)) {
						cls = "null";
					}
					return "<span class=\"" + cls + "\">" + match + "</span>";
				});
			}
		}
	},

	data: {
		model: {
			id: 1,
			name: "John Doe",
			password: "J0hnD03!x4",
			skills: "Javascript",
			email: "john.doe@gmail.com",
			status: true
		},
		schema: {
			fields: [
			
				{
					type: "input",
					inputType: "text",
					label: "Name",
					model: "name",
					inputName: "name",
					readonly: false,
					featured: true,
					disabled: false,
					placeholder: "User's name",
					validator: ["email","required"],
					attributes: [],
					help:'eeeeeeeeeee'
				},
				
				{
					type: "submit",
					label: "",
					buttonText: "Submit",
					validateBeforeSubmit: true
				}

			]
		},

		formOptions: {
			validateAfterLoad: true,
			validateAfterChanged: true
		}
	}
});