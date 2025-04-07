import { jsx } from 'react/jsx-runtime';
import 'react';

var Button = function (_a) {
    var label = _a.label, onClick = _a.onClick, className = _a.className;
    return (jsx("button", { onClick: onClick, className: "px-4 py-2 rounded ".concat(className), children: label }));
};

var Input = function (_a) {
    var value = _a.value, onChange = _a.onChange, placeholder = _a.placeholder, className = _a.className;
    return (jsx("input", { type: "text", value: value, onChange: onChange, placeholder: placeholder, className: "border p-2 rounded ".concat(className) }));
};

export { Button, Input };
//# sourceMappingURL=index.esm.js.map
