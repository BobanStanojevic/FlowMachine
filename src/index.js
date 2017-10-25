import Flow from './Flow';

const executeFlow = async function () {
  const rulesResponse = await fetch('/public/data/rules.json');
  const rules = await rulesResponse.json();

  let flow = await new Flow(rules);

  const dataResponse = await fetch('/public/data/data.json');
  const data = await dataResponse.json();

  flow.processRules(data);
}();
