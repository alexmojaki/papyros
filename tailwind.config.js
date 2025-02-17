module.exports = {
  purge: [
    "./build/**/*.html",
    "./src/**/*.ts",
  ],
  variants: {
    extend: {
      backgroundColor: ["active"],
      opacity: ['disabled'],
      cursor: ['disabled', 'hover'],
      borderWidth: ['focus']
    }
  },
  theme: {
    extend: {
      maxHeight: {
        "0": "0",
        "1/5": "16vh",
        "1/4": "20vh",
        "2/5": "32vh",
        "1/2": "40vh",
        "3/5": "48vh",
        "3/4": "60vh",
        "4/5": "64vh",
        "9/10": "72vh",
        "full": "80vh"
      },
      minHeight: {
        "0": "0",
        "1/5": "16vh",
        "1/4": "20vh",
        "2/5": "32vh",
        "1/2": "40vh",
        "3/5": "48vh",
        "3/4": "60vh",
        "4/5": "64vh",
        "full": "80vh"
      }
    }
  }
};
