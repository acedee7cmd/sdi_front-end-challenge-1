import { Notify } from 'quasar';

/*
  Available Positions:

  1.) top-left
  2.) top
  3.) top-right
  4.) left
  5.) center
  6.) right
  7.) bottom-left
  8.) bottom
  9.) bottom-right
*/

export default {
  success(position, message) {
    Notify.create({
      color: 'teal',
      position: position,
      icon: 'check',
      message,
    });
  },

  error(position, message) {
    Notify.create({
      color: 'red',
      position: position,
      icon: 'warning',
      message,
    });
  },

  warning(position, message) {
    Notify.create({
      color: 'orange',
      position: position,
      icon: 'report_problem',
      message,
    });
  },

  info(position, message) {
    Notify.create({
      color: 'blue',
      position: position,
      icon: 'info',
      message,
    });
  },
};
