import React from "react";

const EmailDraft = () => {
  return (
    <div
    //   className="tab-pane fade"
      id="email-draft"
      role="tabpanel"
      aria-labelledby="email-draft-tab"
    >
      <hr />
      <div className="text-center mt-2">
        <p className="mb-0">You don't have any saved drafts.</p>
        <p className="mb-0">
          Saving a draft allows you to keep a message you aren't ready to send
          yet.
        </p>
      </div>
      <hr className="mb-0" />
    </div>
  );
};

export default EmailDraft;
