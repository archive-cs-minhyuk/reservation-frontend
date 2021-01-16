export function inputPhoneNumber(value) {
  var number = value.replace(/[^0-9]/g, "");
  var phone = "";

  if (number.substr(0, 2) === "02") {
    console.log("HI");
    if (number.length < 4) {
      return number;
    } else if (number.length < 7) {
      phone += number.substr(0, 2);
      phone += "-";
      phone += number.substr(2);
    } else if (number.length < 9) {
      phone += number.substr(0, 2);
      phone += "-";
      phone += number.substr(2, 4);
      phone += "-";
      phone += number.substr(6);
    } else if (number.length < 10) {
      phone += number.substr(0, 2);
      phone += "-";
      phone += number.substr(2, 3);
      phone += "-";
      phone += number.substr(5);
    } else {
      phone += number.substr(0, 2);
      phone += "-";
      phone += number.substr(2, 4);
      phone += "-";
      phone += number.substr(6, 4);
    }
  } else {
    if (number.length < 4) {
      return number;
    } else if (number.length < 7) {
      phone += number.substr(0, 3);
      phone += "-";
      phone += number.substr(3);
    } else if (number.length < 11) {
      phone += number.substr(0, 3);
      phone += "-";
      phone += number.substr(3, 3);
      phone += "-";
      phone += number.substr(6);
    } else {
      phone += number.substr(0, 3);
      phone += "-";
      phone += number.substr(3, 4);
      phone += "-";
      phone += number.substr(7, 4);
    }
  }
  return phone;
}

export function confirmation(
  message = undefined,
  onConfirm,
  onCancel = () => {}
) {
  if (!onConfirm || typeof onConfirm !== "function") {
    return () => {};
  }
  if (onCancel && typeof onCancel !== "function") {
    return () => {};
  }

  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };

  return confirmAction;
}
