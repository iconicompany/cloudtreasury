import Schema from './Schema.mjs';

export default class GeneratingReportSchema extends Schema {
  get() {
    return {
      type: 'object',
      properties: {
        date: {
            title: 'Дата генерации',
            type: 'object',
            // format: 'date',
            // default: new Date()
          }
      },
      required: ['date'],
    }
  }
}