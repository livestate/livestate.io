import { useMemo, useState } from "react";
import jsonp from "jsonp";
import toQueryString from "to-querystring";

export const STATUSES = {
  SENDING: "SENDING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

const fixUrl = (url) => url.replace("/post?", "/post-json?");

export const useMailchimp = (embedUrl) => {
  const jsonUrl = useMemo(() => fixUrl(embedUrl), [embedUrl]);
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState(null);

  const subscribe = (data) => {
    if (status === STATUSES.SENDING) return;
    setStatus(STATUSES.SENDING);
    const params = toQueryString(data);
    const url = jsonUrl + "&" + params;
    jsonp(url, { param: "c" }, (err, data) => {
      if (err || data.result !== "success") {
        setStatus(STATUSES.ERROR);
        setMessage(err || data.msg);
      } else {
        setStatus(STATUSES.SUCCESS);
        setMessage(data.msg);
      }
    });
  };

  return {
    subscribe,
    status,
    message,
  };
};
