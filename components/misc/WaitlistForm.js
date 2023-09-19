import React from "react";
import ButtonPrimary from "./ButtonPrimary";

const LapWaitlistForm = () => {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "@import url('https://fonts.googleapis.com/css2?family=Inter,family=Open+Sans&display=swap');",
        }}
      />
      <div className="newsletter-form-container">
        <form
          className="newsletter-form"
          action="https://app.loops.so/api/newsletter-form/cllxk2h2o00pol50oqqnpk37o"
          method="POST"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <input
            className="newsletter-form-input"
            name="newsletter-form-input"
            type="email"
            placeholder="lamento@example.com"
            required=""
            style={{
              fontFamily: '"Open Sans", sans-serif',
              color: "rgb(11, 19, 42)",
              fontSize: 14,
              margin: "0px 10px 0px 0px",
              width: "100%",
              maxWidth: 300,
              minWidth: 100,
              background: "rgb(255, 255, 255)",
              border: "1px solid rgb(209, 213, 219)",
              boxSizing: "border-box",
              boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px",
              borderRadius: 6,
              padding: "8px 12px",
              height: 50,
              width: 300,
            }}
          />
          <button
            type="submit"
            className="newsletter-form-button"
            style={{
              background: "rgb(252, 211, 77)",
              fontSize: 14,
              color: "rgb(11, 19, 42)",
              fontFamily: '"Open Sans", sans-serif',
              display: "flex",
              width: "min-content",
              maxWidth: 350,
              whiteSpace: "nowrap",
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              padding: "9px 17px",
              boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px",
              borderRadius: 6,
              textAlign: "center",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: 20,
              border: "medium",
              cursor: "pointer",
            }}
          >
            Join Waitlist
          </button>
          <button
            type="button"
            className="newsletter-loading-button"
            style={{
              background: "rgb(252, 211, 77)",
              fontSize: 14,
              color: "rgb(11, 19, 42)",
              fontFamily: '"Open Sans", sans-serif',
              display: "none",
              width: "min-content",
              maxWidth: 300,
              whiteSpace: "nowrap",
              height: 38,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              padding: "9px 17px",
              boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px",
              borderRadius: 6,
              textAlign: "center",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: 20,
              border: "medium",
              cursor: "pointer",
            }}
          >
            Please wait...
          </button>
        </form>
        <div
          className="newsletter-success"
          style={{
            display: "none",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <p
            className="newsletter-success-message"
            style={{
              fontFamily: '"Open Sans", sans-serif',
              color: "rgb(51, 65, 85)",
              fontSize: 14,
            }}
          >
            Thanks! We'll be in touch!
          </p>
        </div>
        <div
          className="newsletter-error"
          style={{
            display: "none",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <p
            className="newsletter-error-message"
            style={{
              fontFamily: '"Open Sans", sans-serif',
              color: "rgb(185, 28, 28)",
              fontSize: 14,
            }}
          >
            Oops! Something went wrong, please try again
          </p>
        </div>
        <button
          className="newsletter-back-button"
          type="button"
          style={{
            color: "#6b7280",
            font: "14px, Inter, sans-serif",
            margin: "10px auto",
            textAlign: "center",
            display: "none",
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
          onmouseout='this.style.textDecoration="none"'
          onmouseover='this.style.textDecoration="underline"'
        >
          ← Back
        </button>
      </div>
    </>
  );
};

const MobWaitlistForm = () => {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "@import url('https://fonts.googleapis.com/css2?family=Inter,family=Open+Sans&display=swap');",
        }}
      />
      <div className="newsletter-form-container">
        <form
          className="newsletter-form"
          action="https://app.loops.so/api/newsletter-form/cllxk2h2o00pol50oqqnpk37o"
          method="POST"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <input
            className="newsletter-form-input"
            name="newsletter-form-input"
            type="email"
            placeholder="lamento@example.com"
            required=""
            style={{
              fontFamily: '"Open Sans", sans-serif',
              color: "rgb(0, 0, 0)",
              fontSize: 14,
              margin: "0px 0px 10px",
              width: "100%",
              height: 44,
              maxWidth: 300,
              minWidth: 100,
              background: "rgb(255, 255, 255)",
              border: "1px solid rgb(209, 213, 219)",
              boxSizing: "border-box",
              boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px",
              borderRadius: 6,
              padding: "8px 12px",
            }}
          />
          <button
            type="submit"
            className="newsletter-form-button"
            style={{
              background: "rgb(252, 211, 77)",
              fontSize: 14,
              color: "rgb(11, 19, 42)",
              fontFamily: '"Open Sans", sans-serif',
              display: "flex",
              width: "100%",
              maxWidth: 300,
              whiteSpace: "normal",
              height: 44,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              padding: "9px 17px",
              boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px",
              borderRadius: 6,
              textAlign: "center",
              fontStyle: "normal",
              fontSize: 17,
              fontWeight: 510,
              lineHeight: 20,
              border: "medium",
              cursor: "pointer",
            }}
          >
            Join Waitlist
          </button>
          <button
            type="button"
            className="newsletter-loading-button"
            style={{
              background: "rgb(252, 211, 77)",
              fontSize: 14,
              color: "rgb(0, 0, 0)",
              fontFamily: '"Open Sans", sans-serif',
              display: "none",
              width: "100%",
              maxWidth: 300,
              whiteSpace: "normal",
              height: 38,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              padding: "9px 17px",
              boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px",
              borderRadius: 6,
              textAlign: "center",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: 20,
              border: "medium",
              cursor: "pointer",
            }}
          >
            Please wait...
          </button>
        </form>
        <div
          className="newsletter-success"
          style={{
            display: "none",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <p
            className="newsletter-success-message"
            style={{
              fontFamily: '"Open Sans", sans-serif',
              color: "rgb(51, 65, 85)",
              fontSize: 14,
            }}
          >
            Thanks! We'll be in touch!
          </p>
        </div>
        <div
          className="newsletter-error"
          style={{
            display: "none",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <p
            className="newsletter-error-message"
            style={{
              fontFamily: '"Open Sans", sans-serif',
              color: "rgb(185, 28, 28)",
              fontSize: 14,
            }}
          >
            Oops! Something went wrong, please try again
          </p>
        </div>
        <button
          className="newsletter-back-button"
          type="button"
          style={{
            color: "#6b7280",
            font: "14px, Inter, sans-serif",
            margin: "10px auto",
            textAlign: "center",
            display: "none",
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
          onmouseout='this.style.textDecoration="none"'
          onmouseover='this.style.textDecoration="underline"'
        >
          ← Back
        </button>
      </div>
    </>
  );
};

export { LapWaitlistForm, MobWaitlistForm} 