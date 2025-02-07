export class ModalConfig {
  title?: string = '';
  desc?: string = '';
  confirm? : Function = () => {};
  discard? :Function = () => {};

  constructor(
    title: string = '',
    desc: string = '',
    confirm = null,
    discard = null
  ) {
    if (title) {
      this.title = title;
    }
    if (desc) {
      this.desc = desc;
    }
    if (confirm) {
      this.confirm = confirm;
    }
    if (discard) {
      this.discard = discard;
    }
  }
}
