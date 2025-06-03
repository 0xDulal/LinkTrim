import React, { useState } from "react";
import axios from "axios";

const ShortenerCard = () => {
      const [url, setUrl] = useState("");
      const [shortUrl, setShortUrl] = useState(""); // State for shortened URL
      const handleButtonClick = async (e) => {
            e.preventDefault(); // Prevent the default form submission
            if (!url) {
                  alert("Please enter a URL to shorten.");
                  return;
            }
            // Make a POST request to the backend to shorten the URL
            const data = await axios.post("http://link-trim-backend.vercel.app/shorten", {
                  originalUrl: url,
            });
            setShortUrl(data.data.shortUrl || ""); // Save the shortened URL to state
            console.log(data.data);
            // Handle the response from the server, e.g., display the shortened URL
      };
      const [copied, setCopied] = useState(false);

      return (
            <div className="min-h-screen flex items-center justify-center bg-gray-800">
                  <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                        <h1 className="font-family-ontserrat text-2xl font-bold mb-6 text-center text-gray-800">
                              LinkTrim - URL Shortener
                        </h1>
                        <form className="flex flex-col gap-4">
                              <input
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                    type="url"
                                    placeholder="Enter your long URL here"
                                    className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    required
                              />
                              <button
                                    type="submit"
                                    className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                                    onClick={(e) => {
                                          handleButtonClick(e);
                                    }}
                              >
                                    Shorten URL
                              </button>
                        </form>
                        {/* Example of showing the shortened URL */}
                        <div className="mt-6 text-center">
                              <span className="text-gray-600">
                                    {shortUrl && (
                                          <div className="mt-6">
                                                <h2 className="text-lg font-semibold mb-2">
                                                      Your shortened URL:
                                                </h2>
                                                <div className="flex items-center">
                                                      <input
                                                            type="text"
                                                            readOnly
                                                            value={shortUrl}
                                                            className="px-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                                                      />
                                                      <div className="ml-2">
                                                            <button
                                                                  onClick={() => {
                                                                        navigator.clipboard.writeText(
                                                                              shortUrl
                                                                        );
                                                                        setCopied(
                                                                              true
                                                                        );
                                                                        setTimeout(
                                                                              () =>
                                                                                    setCopied(
                                                                                          false
                                                                                    ),
                                                                              1500
                                                                        );
                                                                  }}
                                                                  className={`px-4 py-2 rounded transition ${
                                                                        copied
                                                                              ? "bg-green-600 text-white"
                                                                              : "bg-blue-600 text-white hover:bg-blue-700"
                                                                  }`}
                                                            >
                                                                  {copied
                                                                        ? "Copied!"
                                                                        : "Copy"}
                                                            </button>
                                                      </div>
                                                </div>
                                          </div>
                                    )}
                              </span>
                        </div>
                  </div>
            </div>
      );
};

export default ShortenerCard;
