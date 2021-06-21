function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var getErrorMessageId = function () {
  var id = 1;
  return function () {
    return 'authcode-errormessage-' + id++;
  };
}();

var AuthCode = function AuthCode(_ref) {
  var _ref$characters = _ref.characters,
      characters = _ref$characters === void 0 ? 6 : _ref$characters,
      _ref$allowedCharacter = _ref.allowedCharacters,
      allowedCharacters = _ref$allowedCharacter === void 0 ? '^[A-Za-z0-9]*$' : _ref$allowedCharacter,
      onChange = _ref.onChange,
      password = _ref.password,
      inputStyle = _ref.inputStyle,
      containerStyle = _ref.containerStyle,
      inputClassName = _ref.inputClassName,
      containerClassName = _ref.containerClassName,
      internalLabelPrefix = _ref.internalLabelPrefix,
      RequiredErrorMessage = _ref.RequiredErrorMessage;
  var errormessageId = React.useMemo(function () {
    return getErrorMessageId();
  }, []);
  var inputsRef = React.useRef([]);
  React.useEffect(function () {
    inputsRef.current[0].focus();
  }, []);

  var sendResult = function sendResult() {
    var res = inputsRef.current.map(function (input) {
      return input.value;
    }).join('');
    onChange(res);
  };

  var handleOnChange = function handleOnChange(e) {
    if (e.target.value.match(allowedCharacters)) {
      if (e.target.nextElementSibling !== null) {
        e.target.nextElementSibling.focus();
      }
    } else {
      e.target.value = '';
    }

    sendResult();
  };

  var handleOnKeyDown = function handleOnKeyDown(e) {
    var key = e.key;
    var target = e.target;

    if (key === 'Backspace') {
      if (target.value === '' && target.previousElementSibling !== null) {
        if (target.previousElementSibling !== null) {
          target.previousElementSibling.focus();
          e.preventDefault();
        }
      } else {
        target.value = '';
      }

      sendResult();
    }
  };

  var handleOnFocus = function handleOnFocus(e) {
    e.target.select();
  };

  var handleOnPaste = function handleOnPaste(e) {
    var value = e.clipboardData.getData('Text');

    if (value.match(allowedCharacters)) {
      for (var i = 0; i < characters && i < value.length; i++) {
        inputsRef.current[i].value = value.charAt(i);

        if (inputsRef.current[i].nextElementSibling !== null) {
          inputsRef.current[i].nextElementSibling.focus();
        }
      }

      sendResult();
    }

    e.preventDefault();
  };

  var inputs = [];

  var _loop = function _loop(i) {
    var _inputsRef$current, _inputsRef$current$i;

    inputs.push(React__default.createElement("input", {
      key: i,
      "aria-label": internalLabelPrefix + " character " + (i + 1) + " of " + characters,
      "aria-describedby": !((_inputsRef$current = inputsRef.current) === null || _inputsRef$current === void 0 ? void 0 : (_inputsRef$current$i = _inputsRef$current[i]) === null || _inputsRef$current$i === void 0 ? void 0 : _inputsRef$current$i.value) && RequiredErrorMessage ? errormessageId : undefined,
      onChange: handleOnChange,
      onKeyDown: handleOnKeyDown,
      onFocus: handleOnFocus,
      onPaste: handleOnPaste,
      type: password ? 'password' : 'text',
      ref: function ref(el) {
        return inputsRef.current[i] = el;
      },
      maxLength: 1,
      className: inputClassName,
      style: inputStyle
    }));
  };

  for (var i = 0; i < characters; i++) {
    _loop(i);
  }

  return React__default.createElement("div", {
    className: containerClassName,
    style: containerStyle
  }, inputs, RequiredErrorMessage && React__default.createElement("div", {
    id: errormessageId
  }, RequiredErrorMessage));
};

module.exports = AuthCode;
//# sourceMappingURL=index.js.map
