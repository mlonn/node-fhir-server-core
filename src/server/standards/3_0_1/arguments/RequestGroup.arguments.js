module.exports = {
	AUTHOR: {
		name: 'author',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/RequestGroup-author',
		documentation: 'The author of the request group.',
	},
	AUTHORED: {
		name: 'authored',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/RequestGroup-authored',
		documentation: 'The date the request group was authored.',
	},
	CONTEXT: {
		name: 'context',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/RequestGroup-context',
		documentation: 'The context the request group applies to.',
	},
	DEFINITION: {
		name: 'definition',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/RequestGroup-definition',
		documentation: 'The definition from which the request group is realized.',
	},
	ENCOUNTER: {
		name: 'encounter',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/RequestGroup-encounter',
		documentation: 'The encounter the request group applies to.',
	},
	GROUP_IDENTIFIER: {
		name: 'group-identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/RequestGroup-group-identifier',
		documentation: 'The group identifier for the request group.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/RequestGroup-identifier',
		documentation: 'External identifiers for the request group.',
	},
	INTENT: {
		name: 'intent',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/RequestGroup-intent',
		documentation: 'The intent of the request group.',
	},
	PARTICIPANT: {
		name: 'participant',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/RequestGroup-participant',
		documentation: 'The participant in the requests in the group.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/RequestGroup-patient',
		documentation: 'The identity of a patient to search for request groups.',
	},
	PRIORITY: {
		name: 'priority',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/RequestGroup-priority',
		documentation: 'The priority of the request group.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/RequestGroup-status',
		documentation: 'The status of the request group.',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/RequestGroup-subject',
		documentation: 'The subject that the request group is about.',
	},
};