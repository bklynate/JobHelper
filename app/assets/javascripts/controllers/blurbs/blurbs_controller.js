angular.module("AppTrackerControllers").controller('BlurbFormCtrl', ['$http','Blurb', 'Collections', function($http, Blurb, Collections) {
  this.setUp = function() {
    this.blurbs = Collections.Blurbs
    this.blurbs.fetch();

    this.newBlurb = new Blurb({});
    this.selected = this.newBlurb;
  }

  this.selectNew = function() {
    this.selected = this.newBlurb
  }

  this.selectBlurb = function(id) {
    this.selected = this.blurbs.find(id);
  }

  this.checkClass = function(id) {
    if (id === this.selected.id) {
      return 'selected-blurb';
    } else if ( !this.selected.id && id === 'new') {
      return 'selected-blurb';
    } else {
      return '';
    }
  }

  this.save = function() {
    var isNew = this.selected.isNew();
    this.selected.save({success: function(resp) {
      if (isNew) {
        this.blurbs.add(this.selected);
        this.newBlurb = new Blurb({});
      }
    }.bind(this)});
  }


  this.setUp()
}])
