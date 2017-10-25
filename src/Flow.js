import {
  info,
  success,
  fail } from './utils/ConsoleLog';
import Rules from './Rules';
import Rule from './Rule';

const Flow = function (rulesData) {
  this.rules = this.init(rulesData);
}

Flow.prototype = {
  init: function (rulesData) {
    let rules = new Rules();
      for (let rule of rulesData) {

        let ruleFunction = new Function('param', rule.body);
        const newRule = new Rule(rule.id, rule.name, ruleFunction, rule.true_id, rule.false_id);
        rules.addRule(newRule);
      }
    return rules
  },

  processRules: function (dataJSON) {

    let processedRules = [];

    let nextRule = rule => {

      if (processedRules.includes(rule.id)) {
        return fail('Infinite loop');
      }

      processedRules.push(rule.id);
      let result = rule.run(dataJSON);

      if (result.pass) {
        success(result.message);
      } else {
        fail(result.message);
      }

      if (result.next === null) {
        return info('End of flow');
      }

      nextRule(this.rules.getRuleById(result.next));
    }

    nextRule(this.rules.getFirstRule());
  }
}

export default Flow;
