module.exports.addNew = () => ({
  name: {
    presence: true,
    length: {
      minimum: 3,
      message: "must be at least 6 characters",
    },
    format: {
      pattern: "[a-z0-9]+",
      flags: "i",
      message: "can only contain a-z and 0-9",
    },
  },
  country: {
    presence: true,
    inclusion: {
      within: { Iraq: "IQ", Egypt: "EG", Emirates: "AE" },
      message: "^We're not providing services to %{value}",
    },
  },
  haveCash: {
    presence: true,
    type: "boolean",
  },
  working: {
    presence: true,
    type: "boolean",
  },
  city: {
    presence: true,
    type: "string",
  },
  address: {
    presence: true,
    type: "string",
  },
  loc: {
    presence: true,
  },
  "loc.coordinates": {
    presence: true,
    type: "array",
  },
  "loc.type": {
    presence: true,
    type: "string",
  },
});

module.exports.register = () => ({
  name: {
    presence: true,
    length: {
      minimum: 3,
      message: "must be at least 3 characters",
    },
    format: {
      pattern: "[a-z0-9]+",
      flags: "i",
      message: "can only contain a-z and 0-9",
    },
  },

  email: {
    presence: true,
    type: "string",
  },
  password: {
    presence: true,
    type: "string",
  },
});
