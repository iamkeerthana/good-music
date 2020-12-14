import React from "react";
import "./styles.css";
import { useState } from "react";

var musicList = {
  "Christmas Hits": [
    {
      title: "Merry Christmas,Happy Holidays",
      link:
        "https://open.spotify.com/embed/track/5SyQ5OhqrkJGb35V7RBoL0?context=spotify%3Aplaylist%3A37i9dQZF1DX0Yxoavh5qJV&si=qjknm047RFimuR0DHd91Kw",
      rating: "4.4/5"
    },
    {
      title: "Santa claus is coming to town",
      link:
        "https://open.spotify.com/embed/track/2QpN1ZVw8eJO5f7WcvUA1k?context=spotify%3Aplaylist%3A37i9dQZF1DX0Yxoavh5qJV&si=gUVc3rk4ShKn25gKsvvyTQ",
      rating: "4.9/5"
    },
    {
      title: "Santa tell me",
      link:
        "https://open.spotify.com/embed/track/1ADjWm8QNhgNV8yCNNgQ1T?context=spotify%3Aplaylist%3A37i9dQZF1DX0Yxoavh5qJV&si=inA_2etZSN-WMwetdaOaXw",
      rating: "4.6/5"
    },
    {
      title: "Holly Jolly Christmas",
      link:
        "https://open.spotify.com/embed/track/5PuKlCjfEVIXl0ZBp5ZW9g?context=spotify%3Aplaylist%3A37i9dQZF1DX0Yxoavh5qJV&si=dWN2cqmlTwOVQpgMUzn6rA",
      rating: "4.5/5"
    }
  ],
  "Coding Music": [
    {
      title: "See Saw",
      link:
        "https://open.spotify.com/embed/track/0vduvDIA5KjiidpVFRJfpG?si=1tQY-uZBQk-1os-ja8yVbQ",
      rating: "3.6/5"
    },
    {
      title: "Gosh",
      link:
        "https://open.spotify.com/embed/track/79Jl8KMvmnXedTjjW6pJan?si=3w7GsaYpTxWUPPOYuNAxRw",
      rating: "4.4/5"
    },
    {
      title: "Stranger in a room",
      link:
        "https://open.spotify.com/embed/track/5yRSmLQXcMleMwbeLpUKhX?si=PMmB3BKpSjS8DG8VP4SigQ",
      rating: "3.4/5"
    },
    {
      title: "Loud Places",
      link:
        "https://open.spotify.com/embed/track/1jy7SkRcmBCTcv4ZMtwz29?si=5MX7TvHJQQ-a8cnFEVyCbw",
      rating: "4.2/5"
    }
  ],
  "Justin Bebier": [
    {
      title: "Despacito",
      link:
        "https://open.spotify.com/embed/track/6rPO02ozF3bM7NnOV4h6s2?context=spotify%3Aplaylist%3A37i9dQZF1DXc2aPBXGmXrt&si=bvIKDqahTIm7ND_f49rpqw",
      rating: "4.7/5"
    },
    {
      title: "I Don't care",
      link:
        "https://open.spotify.com/embed/track/3HVWdVOQ0ZA45FuZGSfvns?context=spotify%3Aplaylist%3A37i9dQZF1DXc2aPBXGmXrt&si=DrzfjHVdQny7izLquLIeww",
      rating: "3.3/5"
    },
    {
      title: "Never say Never",
      link:
        "https://open.spotify.com/embed/track/5GYbkDveRD2I8M5ZJ14hWn?context=spotify%3Aplaylist%3A37i9dQZF1DXc2aPBXGmXrt&si=rp5BTAmfR5-djddL1g1pUQ",
      rating: "3.4/5"
    },
    {
      title: "Beauty and a beat",
      link:
        "https://open.spotify.com/embed/track/190jyVPHYjAqEaOGmMzdyk?context=spotify%3Aplaylist%3A37i9dQZF1DXc2aPBXGmXrt&si=ZIQUqR7ESyGnH6rFSbxQUw",
      rating: "4.5/5"
    }
  ],
  "Top Hindi 2020": [
    {
      title: "Muqabla",
      link:
        "https://open.spotify.com/embed/track/28veUNu4veN0LOBVa0nFw8?si=w2sJw3L5S4SdKQ6oUv_LCg",
      rating: "4.9/5"
    },
    {
      title: "Lagidi Lahore Di",
      link:
        "https://open.spotify.com/embed/track/5ZQnQnbUVtBO0pl3ShqVHG?si=MEqo0rjESBSkYBnn27Nyzg",
      rating: "2.8/5"
    },
    {
      title: "Jay Jay Shivshankar",
      link:
        "https://open.spotify.com/embed/track/6lfSsCL894Qw15xbt7cSUy?si=iC8WPE3QS4-70N3tGpmmqg",
      rating: "4.5/5"
    },
    {
      title: "Shaitan ka saala",
      link:
        "https://open.spotify.com/embed/track/59vbPXCgc6oxbSzMfVBLNb?si=WVJHRtNETRqmdV3Q3m1Nyw",
      rating: "4.5/5"
    }
  ]
};

let songList = Object.keys(musicList);

export default function App() {
  var [selectedSong, setSong] = useState("Christmas Hits");
  function songClickHandler(song) {
    setSong(song);
  }

  return (
    <div className="App">
      <h1>🎵 Good Music </h1>
      <p>
        {" "}
        🎸 Checkout my favourite music list. and select a genre to get started
        🎸{" "}
      </p>

      <div>
        {songList.map((song) => (
          <button onClick={() => songClickHandler(song)} className="btn">
            {song}
          </button>
        ))}
      </div>
      <hr />

      <div>
        <ul style={{ paddingInlineStart: "0" }}>
          {musicList[selectedSong].map((music) => (
            <li className="list" key={music.title}>
              <div className="play">
                <iframe
                  title={music.title}
                  src={music.link}
                  width="100%"
                  height="80"
                  frameBorder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                ></iframe>
                <p>{music.rating}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <quote>
        " Music, once admitted to the soul, becomes a sort of spirit and never
        dies."
      </quote>

      <footer>
        <p>
          {" "}
          <span> ©️ </span> Copy rights - G.Keerthana Reddy
        </p>
      </footer>

      <div className="empty"></div>
    </div>
  );
}
