sap.ui.define([], function () {
    return {
        trimSuperfluousBytes: function (sVal) {
            var sTrimmed;
            if (typeof sVal === "string") {
                sTrimmed = sVal.substr(104);
                return "data:image/bmp;base64," + sTrimmed;
            }
        },
        formatPhoto: function (sVal) {
            var sTrimmed;
            if (typeof sVal === "string") {
                sTrimmed = sVal.substr(104);
                return "data:image/bmp;base64," + sTrimmed;

            }
        }
    };
})