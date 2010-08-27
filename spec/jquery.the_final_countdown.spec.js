Screw.Unit(function() {
  describe("jquery-the_final_countdown", function() {
    describe('when applied with 5 seconds on the clock', function() {
      before(function() { $("#countdown").createTimer({time_in_seconds:5}); });

      it("should start with 5 seconds on the clock", function() {
        expect($("#countdown").text()).to(equal, '00:05');
      });
      it("should be running", function() {
        expect($("#countdown").data('countdown.state')).to(equal, 'running');
      });
    });

    describe('when applied with autostart disabled', function() {
      before(function() { $("#countdown").createTimer({autostart:false}); });

      it("it should be ready but not started", function() {
        expect($("#countdown").data('countdown.state')).to(equal, 'ready');
      });
    });

    describe('when a timer is started after creation', function() {
      before(function() {
        $("#countdown").createTimer({autostart:false}).startTimer();
      });

      it("should be running", function() {
        expect($("#countdown").data('countdown.state')).to(equal, 'running');
      });
    });

    describe('when a timer is paused', function() {
      before(function() {
        $("#countdown").createTimer().pauseTimer();
      });

      it("should be paused", function() {
        expect($("#countdown").data('countdown.state')).to(equal, 'paused');
      });
    });

    describe('when a timer is reset', function() {
      describe('without an overriding duration', function() {
        before(function() {
          $("#countdown").createTimer({time_in_seconds:100}).resetTimer();
        });

        it("has retains the original duration", function() {
          expect($("#countdown").data('countdown.duration')).to(equal, 100000);
        });
      });
      describe('with an overriding duration', function() {
        before(function() {
          $("#countdown").createTimer().resetTimer({time_in_seconds:200});
        });

        it("has the new duration", function() {
          expect($("#countdown").data('countdown.duration')).to(equal, 200000);
        });
      });
    });
  });
});
