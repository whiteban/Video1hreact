import React, { useState } from "react";
import { Tweet } from "./Tweet";

const DEFAULT_TWEET = [
  {
    id: 0,
    name: "Mathieu",
    content: "Je vais bien",
    like: 1000,
  },
  {
    id: 1,
    name: "Didier",
    content: "Cool",
    like: 20,
  },
  {
    id: 2,
    name: "Luca",
    content: "Super",
    like: 0,
  },
  {
    id: 3,
    name: "Jean",
    content: "Fun",
    like: 13,
  },
];

function App() {
  const [tweets, setTweets] = useState(DEFAULT_TWEET);

  const handleSbmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const content = event.target.content.value;

    const newTweet = {
      id: tweets.length > 0 ? tweets[tweets.length - 1].id + 1 : 0,
      name,
      content,
      like: 0,
    };

    setTweets((prevTweets) => [...prevTweets, newTweet]);

    // Reset form fields after submission
    event.target.reset();
  };

  const onDelete = (tweetID) => {
    setTweets((prevTweets) =>
      prevTweets.filter((tweet) => tweet.id !== tweetID)
    );
  };

  const onLike = (tweetID) => {
    setTweets((prevTweets) =>
      prevTweets.map((tweet) =>
        tweet.id === tweetID ? { ...tweet, like: tweet.like + 1 } : tweet
      )
    );
  };

  return (
    <div>
      <form onSubmit={handleSbmit} className="tweet-form">
        <h4>New Tweet</h4>
        <input placeholder="name" type="text" name="name" required />
        <input placeholder="content" type="text" name="content" required />
        <button type="submit">Tweet</button>
      </form>
      <div className="tweet-container">
        {tweets.map((tweet) => (
          <Tweet
            key={tweet.id}
            id={tweet.id}
            name={tweet.name}
            content={tweet.content}
            like={tweet.like}
            onDelete={onDelete}
            onLike={onLike}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
