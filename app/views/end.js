import exercise from "exercise";

import * as utils from "../lib/utils";
import {
  View,
  $at
} from "../lib/view";
import Clock from "../subviews/clock";

const $ = $at("#view-end");

export class ViewEnd extends View {
  el = $();

  lblActiveTime = $("#lblActiveTime");
  lblHeartRateAvg = $("#lblHeartRateAvg");
  lblHeartRateMax = $("#lblHeartRateMax");
  lblSpeedAvg = $("#lblSpeedAvg");
  lblSpeedMax = $("#lblSpeedMax");
  lblDistance = $("#lblDistance");

  onMount() {
    this.clock = new Clock("#subviewClock2", "minutes");
    this.insert(this.clock);

    if (exercise && exercise.stats) {
      this.lblActiveTime.text = `Total Time: ${utils.formatActiveTime(
        exercise.stats.activeTime || 0
      )}`;

      this.lblHeartRateAvg.text = `Heart Rate Avg: ${exercise.stats.heartRate
        .average || 0} bpm`;
      this.lblHeartRateMax.text = `Heart Rate Max: ${exercise.stats.heartRate
        .max || 0} bpm`;

      const speedAvg = utils.formatSpeed(exercise.stats.speed.average || 0);
      this.lblSpeedAvg.text = `Average Speed: ${speedAvg.value} ${speedAvg.units}`;

      const speedMax = utils.formatSpeed(exercise.stats.speed.max || 0);
      this.lblSpeedMax.text = `Max Speed: ${speedMax.value} ${speedMax.units}`;

      const distance = utils.formatDistance(exercise.stats.distance || 0);
      this.lblDistance.text = `Distance: ${distance.value} ${distance.units}`;
    }
  }

  onRender() {}

  onUnmount() {}
}