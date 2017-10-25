 const Rule = function (id, name, rule, true_id, false_id ) {
  this.id = id;
  this.name = name;
  this.rule = rule;
  this.true_id = true_id;
  this.false_id = false_id;
};

Rule.prototype = {
  run: function(data) {

    return {
      pass: this.rule(data),
      next: this.rule(data) ? this.true_id : this.false_id,
      message: this.name
    };
  }
}

export default Rule;
