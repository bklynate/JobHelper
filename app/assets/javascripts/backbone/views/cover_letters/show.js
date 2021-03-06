JobHelper.Views.CoverLetterShow = Backbone.CompositeView.extend({
  initialize: function(options) {
    this.listenTo(this.model,"sync", this.render)
  },

  events: {
    "click .destroy": "destroy"
  },

  template: JST["cover_letters/show"],

  render: function() {

    this.$el.html(this.template({
      letter: this.model
    }));
    return this;
  },

  destroy: function(event) {
    event.preventDefault();
    if (confirm("Do you really want to destroy this cover letter")) {
      this.model.destroy({
        success: function() {
          Backbone.history.navigate("cover_letters");
        }
      });
    }
  }
})
