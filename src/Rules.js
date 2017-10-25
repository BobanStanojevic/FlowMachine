const Rules = function(rules = []) {
  this.rules = rules;
};

Rules.prototype = {
  
  getRuleById: function(id) {
    let ruleArray = this.rules.filter((rule, index) => {
      return rule.id === id;
    })[0];

    return ruleArray;
  },

  getFirstRule: function(rule) {
    return this.rules[0];
  },

  addRule: function(rule) {
    this.rules.push(rule);
  }
}

export default Rules;
