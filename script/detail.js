// Song Detail
console.log("song2:", document.getElementById("song2"));

  document.addEventListener("DOMContentLoaded", function () {

// Direct dari sc ke detail by id
 function goToDetail(songId) {
  const pathParts = window.location.pathname.split('/');
  const currentPage = pathParts[pathParts.length - 1] || 'index.html';
  
  // Save the current page
  sessionStorage.setItem("cg_lastPage", currentPage);
  window.location.href = "sd.html?id=" + songId;
}

 const s1 = document.getElementById("song1");
  if (s1) {
    s1.addEventListener("click", function () {
      goToDetail(1);
    });
  }

  const s2 = document.getElementById("song2");
  if (s2) {
    s2.addEventListener("click", function () {
      goToDetail(2);
    });
  }

  const s3 = document.getElementById("song3");
  if (s3) {
    s3.addEventListener("click", function () {
      goToDetail(3);
    });
  }

  const s4 = document.getElementById("song4");
  if (s4) {
    s4.addEventListener("click", function () {
      goToDetail(4);
    });
  }

  const s5 = document.getElementById("song5");
  if (s5) {
    s5.addEventListener("click", function () {
      goToDetail(5);
    });
  }

  const s6 = document.getElementById("song6");
  if (s6) {
    s6.addEventListener("click", function () {
      goToDetail(6);
    });
  }

  const s7 = document.getElementById("song7");
  if (s7) {
    s7.addEventListener("click", function () {
      goToDetail(7);
    });
  }

  const s8 = document.getElementById("song8");
  if (s8) {
    s8.addEventListener("click", function () {
      goToDetail(8);
    });
  }

  const s9 = document.getElementById("song9");
  if (s9) {
    s9.addEventListener("click", function () {
      goToDetail(9);
    });
  }

  const s10 = document.getElementById("song10");
  if (s10) {
    s10.addEventListener("click", function () {
      goToDetail(10);
    });
  }

  const s11 = document.getElementById("song11");
  if (s11) {
    s11.addEventListener("click", function () {
      goToDetail(11);
    });
  }

  const s12 = document.getElementById("song12");
  if (s12) {
    s12.addEventListener("click", function () {
      goToDetail(12);
    });
  }

  const s13 = document.getElementById("song13");
  if (s13) {
    s13.addEventListener("click", function () {
      goToDetail(13);
    });
  }

  const s14 = document.getElementById("song14");
  if (s14) {
    s14.addEventListener("click", function () {
      goToDetail(14);
    });
  }

  const s15 = document.getElementById("song15");
  if (s15) {
    s15.addEventListener("click", function () {
      goToDetail(15);
    });
  } 


  // Ganti Isi Detail Song
  const params = new URLSearchParams(window.location.search);
  const songId = params.get("id");

  const songs = {
    1: {
      title: "Reckless",
      artist: "Madison Beer",
      image: "../assets/pop/reckless.png",
      audio: "../assets/pop/reckless.mp3",
      desc: "A heartfelt pop ballad about vulnerability and heartbreak.",
      year: 2022,
      lyrics: `Hey, this is a story I hate
    And telling it might make me break
    But I'll tell it anyway
    This chapter's about
    How you said there was nobody else
    Then you got up and went to her house
    You guys always left me out

    I still have the letter you wrote
    When you told me that I was the only girl
    You'd ever want in your life
    I guess my friends were right

    Each day goes by and each night, I cry
    Somebody saw you with her last night
    You gave me your word, "Don't worry 'bout her"
    You might love her now, but you loved me first
    Said you'd never hurt me, but here we are
    Oh, you swore on every star
    How could you be so reckless with my heart?

    You check in and out
    Of my heart like a hotel
    And she must be perfect, oh well
    I hope you both go to hell

    I still have the letter you wrote
    When you told me that I was the only girl
    You'd ever want in your life
    I guess my friends were right

    Each day goes by and each night, I cry
    Somebody saw you with her last night
    You gave me your word, "Don't worry 'bout her"
    You might love her now, but you loved me first
    Said you'd never hurt me, but here we are (here we are)
    Oh, you swore on every star
    How could you be so reckless with my heart? (Heart)

    How could you be so reckless?
    How could you be so reckless?
    How could you be so reckless with someone's heart?

    Hey, this is a story I hate
    But I told it to cope with the pain
    I'm so sorry if you can relate`,
      genre: "Pop",
      type: "Group",
    
    },
    2: {
      title: "Mean It",
      artist: "Lauv Ft. LANY",
      image: "../assets/pop/lauv.png",
      audio: "../assets/pop/Lauv & LANY - Mean It [Official Video].mp3",
      year: 2020,
      desc: "“Mean It” is the first collaboration between pop artists Lauv and LANY. The song describes the feeling of wanting to mean more to someone who only sees you as a second choice.",
      lyrics: `[Verse 1: Lauv]
Small talk, no conversation
That look makes me impatient
I can't tell what you're thinking
Please, tell me what you're thinking
Last night, we were more than fine
Just tell me if you changed your mind
If you changed your mind (Mind)

[Pre-Chorus: Lauv]
'Cause I'm all, I'm all in
I'm calling, no answer
Would you text me when you feel like?
When it feels right to you
But I'm all, I'm all in
I'm falling faster
But if you're looking at me with a heart of doubt

[Chorus: Lauv]
Don't kiss me right now
Don't tell me that you need me
Don't show up at my house
All caught up in your feelings
Don't run me 'round and 'round
Don't build me up just to let me down
Just to let me down, down, down (Hey)
Don't mess with my head
Don't tell me you're falling
With your feet still on the ledge
I'm all out of breath
Baby, don't run me 'round and 'round
Don't kiss me, no, don't kiss me right now
On your lips, just leave it
If you don't mean it

[Verse 2: Paul Klein]
Oh, yeah
You know you got me in the palm of your hand
But I love those hands
Oh, yeah
But you only let me hold you when he can't
Yeah, I don't understand

[Pre-Chorus: Paul Klein]
'Cause I'm all, I'm all in
I'm calling, no answer
Would you text me when you feel like?
When it feels right to you
But I'm all, I'm all in
I'm falling faster
But if you're looking at me with a heart of doubt

[Chorus: Paul Klein]
Don't kiss me right now
Don't tell me that you need me
Don't show up at my house
All caught up in your feelings
Don't run me 'round and 'round
Don't build me up just to let me down
Just to let me down, down, down (Hey)
Don't mess with my head
Don't tell me you're falling
With your feet still on the ledge
I'm all out of breath
Baby, don't run me 'round and 'round
Don't kiss me, no, don't kiss me right now
On your lips, just leave it
If you don't mean it
[Bridge: Paul Klein & Lauv]
Hurry home, let's never leave the house (But you don't mean it)
Let's stay in bed while all our friends go out (But you don't mean it)
Why you let those words come out of your mouth? (If you don't mean it)
You've been staring at me with a heart of doubt (Ah)

[Chorus: Lauv & Paul Klein]
Don't kiss me right now
Don't tell me that you need me
Don't show up at my house
All caught up in your feelings
Don't run me 'round and 'round
Don't build me up just to let me down
Just to let me down, down, down (Hey)
Don't mess with my head
Don't tell me you're falling
With your feet still on the ledge
I'm all out of breath
Baby, don't run me 'round and 'round
Don't kiss me, no, don't kiss me right now
On your lips, just leave it
If you don't mean it`,
      genre: "Pop",
      type: "Group",
    },
    3: {
      title: "Black and White",
      artist: "Niall Horan",
      image: "../assets/pop/niall.png",
      audio: "../assets/pop/Niall Horan - Black And White (Official Video).mp3",
      year: 2021,
      desc: "In “Black and White,” Niall promises a lover that he’ll love them for the rest of his life as he portrays a wedding scenario where both he and his partner wear the common wedding dress and suit colours of black and white. Sonically, Niall highlights his vocal range as he sings over upbeat, bouncy drums and a light guitar. \n The lyrics were teased on March 10, 2020, in an episode of Niall’s pre-album release series, Heartbreak Weather Watch.",
      lyrics: `[Verse 1]
That first night, we were standin' at your door
Fumblin' for your keys, then I kissed you
Ask me if I wanna come inside
'Cause we didn't wanna end the night
Then you took my hand and I followed you

[Chorus]
Yeah, I see us in black and white
Crystal clear on a starlit night
In all your gorgeous colours
I promise that I'll love you for the rest of my life
See you standing in your dress
Swear in front of all our friends
There'll never be another
I promise that I'll love you for the rest of my life

[Verse 2]
Now we're sittin' here in your livin' room
Tellin' stories while we share a drink or two
And there's a vision I've been holdin' in my mind
We're sixty-five and you ask
When did I first know, I always knew

[Chorus]
And I see us in black and white
Crystal clear on a starlit night
In all your gorgeous colours
I promise that I'll love you for the rest of my life
See you standing in your dress
Swear in front of all our friends
There'll never be another
I promise that I'll love you for the rest of my life

[Bridge]
And I want the world to witness when we finally say "I do"
It's the way you love, I gotta give it back to you
I can't promise picket fences or sunny afternoons
But at night, when I close my eyes

[Chorus]
I see us in black and white
Crystal clear on a starlit night
There'll never be another
I promise that I'll love you
I see us in black and white
Crystal clear on a starlit night
In all your gorgeous colours
I promise that I'll love you for the rest of my life
See you standing in your dress
Swear in front of all our friends
There'll never be another (Never be)
I promise that I'll love you for the rest of my life

[Outro]
And there'll never be another
I promise that I'll love you for the rest of my life`,
      genre: "Pop",
      type: "Group",  
    },
    4: {
      title: "Remember the name",
      artist: "Ed Sheeran Ft. Eminem & 50 Cent",
      image: "../assets/pop/ed.png",
      audio: "../assets/pop/rememberthename.mp3",
      year: 2019,
      desc: "“Remember the Name” is the highly anticipated collaboration between Ed Sheeran, Eminem, and 50 Cent that appears on Ed’s July 2019 album No.6 Collaborations Project. On the track, the artists discuss their place in hip hop and juxtapose their current situation with their humble origins.",
      lyrics: `[Verse 1: Ed Sheeran]
Yeah, I was born a misfit
Grew up 10 miles from the town of Ipswich
Wanted to make it big, I wished it to existence
I never was a sick kid, always dismissed quick
"Stick to singing, stop rappin' like it's Christmas"
And if you're talkin' money, then my conversation's shiftin'
My dreams are bigger than just bein' on the rich list
Might be insanity, but people call it "gifted"
My face is goin' numb from the shit this stuff is mixed with
Watch how the lyrics in the songs might get twisted
My wife wears red, but looks better without the lipstick
I'm a private guy and you know nothin' 'bout my business
And if I had my 15 minutes, I must have missed 'em
20 years old is when I came in the game
And now it's eight years on and you remember the name
And if you thought I was good, well, then I'm better today
But it's ironic how you people thought I'd never be great
I like my shows open-air, Tokyo to Delaware
Put your phones in the air if you wanna be rocked
You know I want way more than I already got
Give me a song with Eminem and 50 Cent in the club

[Chorus: Ed Sheeran & 50 Cent]
You know it ain't my time to call it a day
I wanna crack on and I wanna be paid
But it's 'bout time you remember the name
Ayy, ayy
You know it ain't my time to call it a day
I wanna crack on and I wanna be paid
But it's 'bout time you remember the name
Ayy, ayy
(Hey, hey, hey)

[Verse 2: Eminem]
I can still remember (What?) tryna shop a deal (Uh-huh)
From Taco Bell to TRL
I climbed the Billboard charts to the top until
As fate would have it (Yeah), became an addict
Funny 'cause I had pop appeal
But they said time would tell (What?) if I'd prevail (Huh?)
And all I did was (What?) put nine-inch nails (Where?)
In my eyelids now (What?)
I'm seein' diamond sales like I'm in Zales (Yeah)
Without a doubt, by any means
If rap was skinny jeans, I couldn't do anything in 'em
I'd be splitting seams of denim when I'm spitting schemes
Which really means, no "if," "ands," or "buts" are squeezin' in between
You sleep on me 'cause you're only fuckin' with me in your dreams
Not even when I'm on my deathbed
Man, I feel like Ed, it isn't time to drop the mic yet
So why would I quit?
The thought that I would stop when I'm dead
Just popped in my head
I said it, then forgot what I said

[Chorus: Ed Sheeran & Eminem]
It isn't my time to call it a day
I got rap locked and I'm already paid
But it's 'bout time you remember the name
Ayy, ayy
You know it ain't my time to call it a day
I got rap locked and I'm already paid
But it's 'bout time you remember the name
Ayy, ayy
[Verse 3: 50 Cent]
Ain't nobody cold as me, I dress so fresh, so clean
You can find me in my whip, rockin' my Fendi drip
Man, you know just what I mean
Shinin', wrist with the rocks on it, Buscemis with locks on it
Everything my voice on, this shit knock, don't it?
Balenciaga saga, I'm in Bergdorf ballin'
It's just another episode, my hoes, I spoil 'em
She like the fly shit and I like to buy shit
Shit, I'm gettin' stupid money, what else we gon' do with money?
Bitch, we be ballin' out, the king bring you 50 bottles
Tonight, we gon' blow a check, worry 'bout your shit tomorrow
The turn up be so real, we 'bout to be super lit
Boy, I'm kickin' straight facts, that's just how we do this shit
Tomorrow, we hangin' over 'til we start feelin' sober
Then it's time to start it over, here we go again

[Chorus: Ed Sheeran & Eminem, 50 Cent]
You know it ain't my time to call it a day
I got rap locked and I'm already paid
And it's about time you remember the name
Ayy, ayy
You know it ain't my time to call it a day
I got rap locked and I'm already paid
But it's 'bout time you remember the name
Ayy, ayy
(Hey, hey, hey)`,
      genre: "R&B",
      type: "Group",
    },
    5: {
      title: "Fallin'(adrenaline)",
      artist: "Why Don't We",
      image: "../assets/pop/wdw.png",
      audio: "../assets/pop/Why Don't We - Fallin' (Adrenaline) [Official Music Video].mp3",
      year: 2021,
      desc: "“Fallin'” marks Why Don’t We’s first release since they began their eight-month hiatus at the start of 2020, following their 2019 project in which they released a single each month. \n The single was released at 12PM ET on September 29, 2020 just two days after the band’s four-year anniversary.Interestingly, Why Don’t We featured a song called “Falling” on the debut album, 8 Letters, released in 2018. Upon the release of “Fallin'”, the track named was changed to “Can’t You See” on streaming services. On October 23, 2020, the song’s title was changed to “Fallin' (Adrenaline)” on streaming services to further distinguish itself from “Can’t You See.” In an Instagram post the band shared: fallin’ was the last song we wrote in the studio and the first one we wanted to share with you. there’s no other way to describe it except it just felt right. we can’t wait for you to hear it.",
      lyrics: `[Verse 1: Jonah]
Caught in the moment, not even thinkin' twice
Everything's frozen, nothing but you and I
Can't stop my heart from beating
Why do I love this feeling?
Make me a promise, tell me you'll stay with me
If I'm bein' honest, I don't know where this leads
But that's the only question
Baby, don't keep me guessin'

[Pre-Chorus: Daniel]
Ooh
You are my muse
I feel so reckless
Oh, you're makin' me, makin' me, makin' me give in

[Chorus: All, Zach]
Oh, baby, I can feel the rush of adrenaline
I'm not scared to jump if you want to
Let's just fall in love for the hell of it
Maybе we'll just keep fallin'
I can feel the rush of adrenalinе
I'm not scared to jump 'cause I want you
Let's just fall in love for the hell of it
Maybe we'll just keep fallin'

[Verse 2: Corbyn]
When I'm around ya, I feel it in my veins
There's something about ya that's makin' me go insane
We have a storm to weather
My little sweet surrender

[Pre-Chorus: Daniel]
Ooh (Woah)
You are my muse (You are my muse)
I feel so reckless
Oh, you're makin' me, makin' me, makin' me give in

[Chorus: All]
Oh, baby, I can feel the rush of adrenaline
I'm not scared to jump if you want to
Let's just fall in love for the hell of it
Maybe we'll just keep fallin'
I can feel the rush of adrenaline
I'm not scared to jump 'cause I want you
Let's just fall in love for the hell of it
Maybe we'll just keep fallin'

[Post-Chorus: All, Corbyn]
(Fallin', fallin', fallin', fallin') Fall, fallin'
(Fallin', fallin', fallin', fallin') Fallin'
(Fallin', fallin', fallin', fallin') Fallin'
Maybe, we'll just keep fallin'
[Bridge: Jack, Jack & Daniel]
Ooh
You are my muse
I feel so reckless
Oh, you're makin' me, makin' me, makin' me, makin' me
Makin' me, makin' me, makin' me give in

[Chorus: All, Jack]
Oh, baby, I can feel the rush of adrenaline
I'm not scared to jump if you want to
Let's just fall in love for the hell of it
Maybe we'll just keep fallin' (Just keep fallin')
I can feel the rush of adrenaline (Adrenaline, ooh)
I'm not scared to jump 'cause I want you (I want you)
Let's just fall in love for the hell of it
Maybe we'll just keep fallin' (We'll just keep fallin')

[Outro: All, Jack]
(Fallin', fallin', fallin', fallin') Yeah
(Fallin', fallin', fallin', fallin') We'll just keep fallin'
(Fallin', fallin', fallin', fallin') Ooh, ooh
Maybe we'll just keep fallin' (Fallin')`,
      genre: "R&B",
      type: "Group",
      
    } ,
    6: {
      title: "Saturn",
      artist: "SZA",
      image: "../assets/rnb/saturn.png",
      audio: "../assets/rnb/saturn.mp3",
      year: 2024,
      desc: "A dreamy, introspective track where SZA longs to escape reality and find peace far from Earth.",
      lyrics: `If there's another universe
Please make some noise (noise)
Give me a sign (sign)
This can't be life
If there's a point to losing love
Repeating pain (why?)
It's all the same
I hate this place

Stuck in this paradigm
Don't believe in paradise
This must be what Hell is like
There's got to be more, got to be more
Sick of this head of mine
Intrusive thoughts, they paralyze
Nirvana's not as advertised
There's got to be more, been here before

Ooh (ooh, ooh)
Life's better on Saturn
Got to break this pattern
Of floating away
Ooh (ooh, ooh)
Find something worth saving
It's all for the taking
I always say

I'll be better on Saturn
None of this matters
Dreaming of Saturn, oh

If karma's really real
How am I still here?
Just seems so unfair
I could be wrong though
If there's a point to being good
Then where's my reward?
The good die young and poor
I gave it all I could

Stuck in this terradome
All I see is terrible
Making us hysterical
There's got to be more, got to be more
Sick of this head of mine
Intrusive thoughts, they paralyze
Nirvana's not as advertised
There's got to be more, been here before

Ooh (ooh, ooh)
Life's better on Saturn
Got to break this pattern
Of floating away
Ooh (ooh, ooh)
Find something worth saving
It's all for the taking
I always say

I'll be better on Saturn
None of this matters
Dreaming of Saturn, oh` ,
      genre: "R&B",
      type: "Group",
      
    },

    7:{
      title: "Talk",
      artist: "Khalid",
      image: "../assets/rnb/khalid.png",
      audio: "../assets/rnb/talk.mp3",
      year: 2019,
      desc: "“Talk” is the lead single from Khalid’s sophomore album. The song marks his first collaboration with electronic production duo Disclosure. \nIn the song, Khalid laments about a relationship moving too fast and the need for communication between both members of the relationship. \nThe song was teased by Khalid a day before its release and premiered on Zane Lowe’s Beats 1 Radio show:",
      lyrics: `[Chorus]
Can we just talk? Can we just talk?
Talk about where we're goin'
Before we get lost, lend me your thoughts
Can't get what we want without knowin'
I've never felt like this before
I apologize if I'm movin' too far
Can we just talk? Can we just talk?
Figure out where we're goin'

[Verse 1]
Yeah, started off right
I can see it in your eyes
I can tell that you're wantin' more
What's been on your mind?
There's no reason we should hide
Tell me somethin' I ain't heard before

[Pre-Chorus]
Oh, I've been dreamin' 'bout it
And it's you I'm on
So stop thinkin' 'bout it

[Chorus]
Can we just talk? Can we just talk?
Talk about where we're goin'
Before we get lost, lend me your thoughts (Yeah)
Can't get what we want without knowin' (No)
I've never felt like this before
I apologize if I'm movin' too far
Can we just talk? Can we just talk?
Figure out where we're goin'

[Verse 2]
Oh, nah
Penthouse view, left some flowers in the room
I'll make sure I leave the door unlocked
Now I'm on the way, swear I won't be late
I'll be there by five o'clock

[Pre-Chorus]
Oh, you've been dreamin' 'bout it
And I'm what you want
So stop thinkin' 'bout it

[Chorus]
Can we just talk? (Oh) Can we just talk?
Talk about where we're goin'
Before we get lost, lend me your thoughts
Can't get what we want without knowin'
I've never felt like this before
I apologize if I'm movin' too far
Can we just talk? Can we just talk?
Figure out where we're goin'

[Outro]
Figure out where we're goin'` ,
      genre: "R&B",
      type: "Group",
      
    },

    8:{
      title: "Love Songs",
      artist: "Kaash Paige",
      image: "../assets/rnb/kaash.png",
      audio: "../assets/rnb/kp-lovesongs.mp3",
      year: 2019,
      desc: "This is one of those songs I sing and just think about all the lame people who played me in life and I just sit there and be like.",
      lyrics:` [Verse 1]
I miss my cocoa butter kisses, hope you smile when you listen
Ain't no competition, just competin' for attention
And you like, "I'm not on no games"
Well, baby, I been peepin', and you ain't been the same
Like, who been on your mind? Who got your time?
Who you been vibin' with and why I can't make you mine?
You used to be texting me, checking me, calling me your slime
And now you treat me like my worth less than a dime

[Chorus]
And if we paint a perfect picture, we can make it last forever
And you the only one I want to wear my orange sweater
I told you I am down for the worse or the better
But I keep sticking to you 'cause them four stupid letters
You got me singing love songs (Love songs, love songs)
You got me singing love songs (Love songs, love songs)
You got me singing love songs (Love songs, love songs)
You got me singing love songs (Love songs, love songs)

[Verse 2]
You got me singing love songs
Oh, this the type of song you tip on four fours and pour up song
Yeah, that make you fall in love song
That "Hey, bighead, what you on?" Make you hit me up song
Double cupped, but bae, I'm leaning on you
You been playing games, I'm tryna make you my boo
I don't duck no action, you bust one and I bust two
Pills of satisfaction, I take the red, you pop the blue

[Chorus]
And if we paint a perfect picture, we can make it last forever
And you the only one I want to wear my orange sweater
I told you I am down for the worse or the better
But I keep sticking to you 'cause them four stupid letters
You got me singing love songs (Love songs, love songs)
You got me singing love songs (Love songs, love songs)
You got me singing love songs (Love songs, love songs)
You got me singing love songs (Love songs, love songs)` ,
      genre: "R&B",
      type: "Group",
      
    },

    9:{
      title: "Double Take",
      artist: "Dhruv",
      image: "../assets/rnb/dhruv.png",
      audio: "../assets/rnb/dhruv-DT.mp3",
      year: 2019,
      desc: "“double take” follows dhruv as he falls in love with one of his friends, and he wonders if his friend feels the same way. The single was the first released song by dhruv after a couple of SoundCloud releases.",
      lyrics:`[Intro]
Ooh-ooh-ooh-ooh
Ooh-ooh-ooh
Ooh-ooh-ooh-ooh

[Verse 1]
I could say I never dare
To think about you in that way
But, I would be lying
And I pretend I'm happy for you
When you find some dude to take home
But I won't deny that

[Pre-Chorus]
In the midst of the crowds
In the shapes, in the clouds
I don't see nobody but you
In my rose-tinted dreams
Wrinkled silk on my sheets
I don't see nobody but you

[Chorus]
Boy, you got me hooked onto somethin'
Who could say that they saw us comin'?
Tell me, do you feel the love?
Spend a summer or a lifetime with me
Let me take you to the place of your dreams
Tell me, do you feel the love?
Ooh-ooh-ooh-ooh

[Verse 2]
And I could say I never unzipped
Those blue Levi's inside my head
But that's far from the truth
Don't know what's come over me
It seems like yesterday when I said
“We'll be friends forever”

[Pre-Chorus]
Constellations of stars
Murals on city walls
I don't see nobody but you
You're my vice, you're my muse
You're a nineteenth floor view
I don't see nobody but you

[Chorus]
Boy, you got me hooked onto somethin'
Who could say that they saw us comin'?
Tell me, do you feel the love?
Spend a summer or a lifetime with me
Let me take you to the place of your dreams
Tell me, do you feel the love?

[Chorus]
Boy, you got me hooked onto somethin'
Who could say that they saw us comin'?
Tell me, do you feel the love?
Spend a summer or a lifetime with me
Let me take you to the place of your dreams
Tell me, do you feel the love?
[Outro]
Do you feel the love? (Ooh-ooh-ooh-ooh)
Do you feel the love?
Do you feel the love?
Do you feel the love?
Feel the love
Feel the love`,
      genre: "R&B",
      type: "Group",
      
    },

    10:{
      title: "​Close with desires",
      artist: "​Teo Glacier",
      image: "../assets/rnb/teo.png",
      audio: "../assets/rnb/teo.mp3",
      year: 2023,
      desc: "“close with desires” is a song by New Zealand-born artist, teo glacier and produced by Rory Noble. The song was first teased on 13th April, 2023. After attaining millions of views on TikTok and over 407.7k posts using the sound, the South Auckland-musician released the song on 17th May, 2023 after a long-anticipated wait. He got over 1,000,000 streams on Spotify alone in less than four days. The music video for the song premiered on 26th May, 2023 and has over 180,000 views.",
      lyrics:`[Verse 1]
We go back and forth like it's nothing (Nothing)
Seems that we already hit the summit (Already hit the summit)
I could try to chase you up but I already tried (I already tried)
Ain't worth my time (Ain't worth my time)
Ain't worth my-

[Pre-Chorus]
Time and time again, babe (Time and time again)
Messages on read, babe (Messages on read)
I can't read between the lines (I can't read between), the lines
And I gave you my best, babe (I gave you my best)
You still up and left, babe (You still up and left)
Maybе right person wrong timing (Timing)

[Chorus]
But I can't be stuck on someonе who
Don't love me no more (Love me no more)
Trust me no more (Trust me no more)
Want me no more (Want me no more)
And I can't be falling for somebody new if I can't (New if I can't)
Forget about the past, forget what we had
And I can't be stuck on someone
Who don't love me no more (Love me no more)
Trust me no more (Trust me no more)
Want me no more (Want me no more)
And I can't be falling for somebody new if I can't (New if I can't)
Forget about the past, forget what we had

[Verse 2]
Oh I just can't forget, babe (I just can't forget)
You know I tried my best, babe (Know I tried my best)
I been tripping over her (I been tripping)
Then trip on you the next day
Wish I could rewind (Wish I could rewind)
Get you out my mind (Get you out my mind)
I just need some time (I just need some time)
I just need some–

[Pre-Chorus]
Time and time again, babe (Time and time again)
Messages on read, babe (Messages on read)
I can't read between the lines (I can't read between), the lines
And I gave you my best, babe (I gave you my best)
You still up and left, babe (You still up and left)
Maybe right person wrong timing (Timing)

[Chorus]
But I can't be stuck on someone
Who don't love me no more (I can't be, love me no)
Trust me no more (Trust me no)
Want me no more (Want me no)
And I can't be falling for somebody new if I can't (Somebody, new if I can't)
Forget about the past (Forget about it)
Forget what we had (Forget about it)
And I can't be stuck on someone
Who don't love me no more (Stuck on someone)
Trust me no more (Trust me no more)
Want me no more (Want me no more)
And I can't be falling for somebody new if I can't
Forget about the past (Forget about it)
Forget what we had (Forget what we had)`  ,
      genre: "R&B",
      type: "Group",
      
    },

      11: {
      title: "Whiplash",
      artist: "Aespa",
      image: "../assets/kpop/whiplash.png",
      audio: "../assets/kpop/whiplash.mp3",
      year: 2021,
      desc: "A heartfelt pop ballad about vulnerability and heartbreak.espa “Whiplash” is an EDM-based dance song featuring a strong, intense, and fast-paced bass and house beats.",
      lyrics: `one look, give 'em whiplash
Beat drop with a big flash
집중해 좀 더 think fast
이유 넌 이해 못 해 uh
왜 이제야 know I did that, uh
Day one, know I been bad, uh
Don't stop 흔들린 채
무리해도 can't touch that (can't touch that)

Under pressure, body sweating, can you focus? (Yeah)
어디서나 거침없어 I'm the coldest
오직 나만이 이 판을 바꿀 changer
Just close your eyes, breathe in and visualize

One look, give 'em whiplash
Beat drop with a big flash
집중해 좀 더 think fast
이유 넌 이해 못 해 uh
왜 이제야 know I did that (yeah)
Day one, know I been bad
Don't stop 흔들린 채 (yeah)
무리해도 can't touch that (can't touch that)

Whip-whiplash, whip-whiplash
Whip-whiplash, whip-whiplash
Whip-whiplash, whip-whiplash
Whip-whiplash, one look, give 'em whiplash

Fancy 이건 참 화려해
It's glowing and it's flashy (yeah)
알아, 적당함이 뭔지 keep it classy
따라 하지 넌 또 하나부터 열까지 (yeah)
아닌척하지 (yeah)

Under pressure, body sweating, can you focus? (Hoo)
I deliver, I can promise, I'm the coldest (cold)
외면해도 소용없지 don't you blow it?
Just close your eyes, breathe in and visualize

시작되는 순간 끝나버린 판단
기횐 오직 one time, unforgettable
찾아낸 the right light 사라지지 않아
눈에 새긴 one time, unforgettable

One look, give 'em whiplash (sheesh)
Beat drop with a big flash
집중해 좀 더 think fast
이유 넌 이해 못 해 uh (yeah)
왜 이제야 know I did that, uh (yeah)
Day one, know I been bad, uh (been bad)
Don't stop 흔들린 채 (yeah)
무리해도 can't touch that (can't touch that)

I'm the highlight 비춰 red light
Yeah, tonight it's all about me (all about me)
You know it's my site 거친 next sigh
만들어갈 history

One look, give 'em whiplash (whip-whip, sheesh)
Beat drop with a big flash (yeah)
따라와 어서 move fast (move, move, move)
이유 넌 이해 못 해 uh (yeah)
왜 이제야 know I did that, uh (did that, yeah)
Day one, know I been bad, uh (been bad)
Don't stop 흔들린 채 (yeah)
다가와도 can't touch that (can't touch that)\

Whip-whiplash, whip-whiplash
Whip-whiplash, whip-whiplash
Whip-whiplash, whip-whiplash
Whip-whiplash, one look, give 'em whiplash`,
      genre: "K-Pop",
      type: "Group",
      },

    12: {
      title: "Shout Out",
      artist: "ENHYPEN",
      image: "../assets/kpop/enhypen.png",
      audio: "../assets/kpop/'SHOUT OUT' Tour video - ENHYPEN.mp3",
      year: 2021,
      desc: "They told us that it was going to be sort of like an unofficial fan song where we can really perform in front of our fans at a concert maybe. And, you know, we did perform that… and it was sort of what I imagined it would be like… Before, when I was writing, we hadn’t done a concert yet… so I had to use my imagination… What I imagined back then is sort of what happened, so it was really meaningful to me.",
      lyrics: `[Intro: Heeseung, NI-KI]
We go and shout, yeah-eh
Oh
Oh-oh, oh-oh

[Verse 1: Jay, Jungwon, Heeseung]
매일 휩쓸리듯 하루를 살다가 (maeil hwipseullideut harureul saldaga)
작은 의문이 생겼지 (jageun uimuni saenggyeotji)
온갖 사람들의 말에 지쳐만 가 (ongat saramdeure mal-e jichyeoman ga)
대체 누가 나를 정의해 (daeche nuga nareul jeong-uihae)
날 가뒀던 거짓 같은 paradigm (nal gadwossdeon geojit gateun paradigm)
누군가 그어 놓은 border line 넘어 (nugunga geueo noh-eun border line neomeo)
I shout out, and this is my shout out
나다운 날 위해 (nadaun nal wihae)

[Pre-Chorus: Sunoo, NI-KI]
제 멋대로, 네 멋대로 (je meotdaero, ne meotdaero) (Woah-oh-oh)
여긴 우리만의 universe (yeogin urimanui universe) (Woah-oh-oh)
눈치 따위 볼 것 없이 (nunchi ttawi bol geot eopsi)
그저 자유로운 이 순간, you and me (geujeo jayurowoon i sungan, you and me)

[Chorus: Heeseung, Jake, Jay, Sunghoon]
We go and shout, shout, shout
When we're together
Three, two, one, 뜨겁게 외쳐 (tteugeopge oechyeo)
하나로 커져가는 목소리 (hanaro keojyeoganeun moksori)
심장이 터질 듯이 뛰고 있어 (simjangi teojil deusi ttwigo isseo)
Shout, shout, shout, 너와 나 같이 (neowa na gachi)
세상을 흔들어놔 더 시끄럽게 (sesangeul heundeureonwa deo sikkeureopge)
널 향한 내 마음을 소리쳐 (neol hyanghan nae maeumeul sorichyeo)
가슴 뜨겁게 shout out (gaseum tteugeopge shout out)

[Verse 2: NI-KI, Jay, Sunoo, Jake]
혼자라면 포기 했겠지 (honjaramyeon pogi haetgetji)
날 가둬둔 그 벽에 갇혀 (nal gadwodun geu byeoge gathyeo)
날 부르는 너의 목소리 (nal bureuneun neoui moksori)
You're blowing up my heart, uh, bang-bang!
서로의 목격자, yeah, you and I-I (seoro-ui mokgyeokja, yeah, you and I-I)
서로의 listener 믿고 있잖아 (seoro-ui listener mitgo itjana)
우리의 완벽한 harmony (uriui wanbyeokhan harmony)
정말 아름다워 (jeongmal areumdawo)

[Pre-Chorus: Heeseung, Sunghoon]
제 멋대로, 네 멋대로 (je meotdaero, ne meotdaero) (Woah-oh-oh)
여긴 우리만의 universe (yeogin urimanui universe) (Woah-oh-oh)
눈치 따위 볼 것 없이 (nunchi ttawi bol geot eopsi)
그저 자유로운 이 순간, you and me (geujeo jayurowoon i sungan, you and me)

[Chorus: Jay, Sunoo, Jungwon, NI-KI]
We go and shout, shout, shout
When we're together
Three, two, one, 뜨겁게 외쳐 (tteugeopge oechyeo)
하나로 커져가는 목소리 (hanaro keojyeoganeun moksori)
심장이 터질 듯이 뛰고 있어 (simjangi teojil deusi ttwigo isseo)
Shout, shout, shout, 너와 나 같이 (neowa na gachi)
세상을 흔들어놔 더 시끄럽게 (sesangeul heundeureonwa deo sikkeureopge)
널 향한 내 마음을 소리쳐 (neol hyanghan nae maeumeul sorichyeo)
가슴 뜨겁게 shout out (gaseum tteugeopge shout out)

[Post-Chorus: Heeseung, Jungwon, NI-KI]
Oh-oh-oh-oh, shout
Oh-oh-oh-oh, oh
세상을 향해 함께 소리쳐 (sesangeul hyanghae hamkke sorichyeo)
우린 더 크게 shout out (urin deo keuge shout out)

[Bridge: Jake, Sunghoon, Heeseung]
진짜 내 목소리로 (jinjja nae moksoriro) (Oh-oh-oh)
네게 진심을 전해 (nege jinsimeul jeonhae) (Oh-oh)
우리 함께면 세계는 아름다워 (uri hamkkemyeon segyeneun areumdawo) (Ah-ah)
점점 퍼져가, 퍼져가 멀리 (jeomjeom peojyeoga, peojyeoga meolli)
이젠 소리쳐, 소리쳐, 외쳐 (ijen sorichyeo, sorichyeo, oechyeo)
'Til the end of time
The story of you and I

[Chorus: Heeseung, Jake, Jay, Sunghoon]
We go and shout, shout, shout
When we're together
Stay, stay, stay, you make it better (Yeah)
My life without you is a misery
심장이 터질 듯이 뛰고 있어 (simjangi teojil deusi ttwigo isseo)
Shout, shout, shout, 너와 나 같이 (neowa na gachi)
세상을 흔들어놔 더 시끄럽게 (sesangeul heundeureonwa deo sikkeureopge)
널 향한 내 마음을 소리쳐 (neol hyanghan nae maeumeul sorichyeo)
가슴 뜨겁게 shout out (gaseum tteugeopge shout out)

[Post-Chorus: Sunoo, Jungwon, Jay, All]
Oh-oh-oh-oh, shout
Oh-oh-oh-oh, oh
세상을 향해 함께 소리쳐 (sesangeul hyanghae hamkke sorichyeo)
우린 더 크게 shout out (urin deo keuge shout out)
Oh-oh-oh-oh, shout
Oh-oh-oh-oh, oh
세상을 향해 함께 소리쳐 (sesangeul hyanghae hamkke sorichyeo)
우린 더 크게 shout out (urin deo keuge shout out)`,
      genre: "K-Pop",
      type: "Group",
    },

    13: {
      title: "Shadow",
      artist: "Seventeen",
      image: "../assets/kpop/seventeen.png",
      audio: "../assets/kpop/shadow.mp3",
      year: 2022,
      desc: "Our focus for this track was the contrast between the track and theme of the song. Perhaps the contrast that makes the sounds feel slightly exaggerated is also where the sentiments of ‘80s and hyperpop stem from. The track is quite rhythmic in nature with its roots in 2-step, which builds a contrast to the weight of the idea of embracing our inner shadows.",
      lyrics: `[Verse 1: Joshua, Dino, Hoshi, Jeonghan]
저 멀리 뜨거운 해 떠오르지 않길 원했어 (jeo meolli tteugeoun hae tteooreuji ankil wonhaesseo)
빛의 반대편 그늘진 모든 게 싫어서 (bichiui bandaepyeon geuneuljin modeun ge sirheoseo)
걸음걸이마다 따라와서 시선은 항상 그곳에 있어 (georeumgeorimada ttaraowaseo siseoneun hangsang geugose isseo)
도망치는 내 모습이 너무 싫었어 (domangchineun nae moseubi neomu sireosseo)

[Pre-Chorus: THE 8, WOOZI]
어느새 우린 닮아가고 있었어 (eoneusae urin dalmagago isseosseo)
마치 데칼코마니인 것처럼 (machi dekalkomanin geotcheoreom)
너와 마주 하고 싶은 맘에 (neowa maju hago sipeun mame)

[Chorus: Mingyu, Wonwoo]
Shadow, my shadow, my shadow
널 남에게 보이지 않으려 (neol namege boiji aneuryeo)
Shadow, my shadow, my shadow
미워하고 아파도 했어 (miwohago apado haesseo)
Shadow, my shadow, my shadow

[Post-Chorus: SeungKwan, DK]
Oh, 이제 난 알아 너 또한 나인걸 (ije nan ara neo ttohan naingeol)
숨기고 싶지 않아, I want to hold your hand (sumgigo sipji ana, I want to hold your hand)
나의 어두움마저 밝게 빛나고 말 테니까 (naui eoduummajeo balkge bitnago mal tenikka)
Baby, I'm a shadow of you

[Verse 2: WOOZI, Jun, THE 8, Joshua]
달렸어 네게서 도망치려 (dallyeosseo negeso domangchiryeo)
숨었어 빛이 없는 곳으로 (sum eosseo bichi eomneun goseuro)
도망치는 마음으로 나는 run, run, run (domangchineun maeumeuro naneun run, run, run)
숨소리마저 똑같아서 내 마음이 널 듣고 싶어 해 (sumsorimajeo ttokgataseo nae maeumi neol deutgo sipeo hae)
도망치는 내 모습이 너무 싫었어 (domangchineun nae moseubi neomu sireosseo)

[Pre-Chorus: Vernon, Jun, Wonwoo]
어느새 우린 닮아가고 있었어 (eoneusae urin dalmagago isseosseo)
마치 데칼코마니인 것처럼 (machi dekalkomanin geotcheoreom)
너와 마주 하고 싶은 맘에 (neowa maju hago sipeun mame)

[Chorus: Hoshi, Vernon]
Shadow, my shadow, my shadow
널 남에게 보이지 않으려 (neol namege boiji aneuryeo)
Shadow, my shadow, my shadow
미워하고 아파도 했어 (miwohago apado haesseo)
Shadow, my shadow, my shadow

[Post-Chorus: DK, SeungKwan]
Oh, 이제 난 알아 너 또한 나인걸 (ije nan ara neo ttohan naingeol)
숨기고 싶지 않아, I want to hold your hand (sumgigo sipji ana, I want to hold your hand)
나의 어두움마저 밝게 빛나고 말 테니까 (naui eoduummajeo balkge bitnago mal tenikka)
Baby, I'm a shadow of you

[Bridge: Mingyu, S.COUPS, Dino]
Stay with me, 어느 순간에도 (eoneu sunganedo)
같은 빛 같은 그림자 되어 (gateun bit gateun geurimja doeeo)
어느 곳에서도 너를 안고 (eoneu gosesedo neoreul anko)
Yeah, 검은색 칠해진 널 외면하기만 했어 (geomeunsaek chilhaejin neol oemyeonhagiman haesseo)
서로의 똑같은 모습을 잠시 잊은 채로 (seoroui ttokgateun moseubeul jamsi ijeun chaero)
부정하기 바빴었던 어제 (bujeonghagi bappasseotdeon eoje)
드넓은 지구 한가운데 (deuneolbeun jigu hangaunde)
우리의 관계는 유일해 (uriui gwangyeneun yuilhae)
같은 발맞춰 달려 everywhere (gateun balmatchwo dallyeo everywhere)

[Chorus: Mingyu, S.COUPS]
Shadow, my shadow, my shadow
널 남에게 보이지 않으려 (neol namege boiji aneuryeo)
Shadow, my shadow, my shadow
미워하고 아파도 했어 (miwohago apado haesseo)
Shadow, my shadow, my shadow

[Post-Chorus: WOOZI, Jun, Jeonghan]
Oh, 이제 난 알아 너 또한 나인걸 (ije nan ara neo ttohan naingeol)
숨기고 싶지 않아, I want to hold your hand (sumgigo sipji ana, I want to hold your hand)
나의 어두움마저 밝게 빛나고 말 테니까 (naui eoduummajeo balkge bitnago mal tenikka)
Baby, I'm a shadow of you`,
      genre: "K-Pop",
      type: "Group",
    },

    14: {
      title: "뚜두뚜두 (DDU-DU DDU-DU)",
      artist: "BLACKPINK",
      image: "../assets/kpop/dududu.png",
      audio: "../assets/kpop/dududu.mp3",
      year: 2018,
      desc: "The girls are unapologetically savage. They’re not shy about letting you know about the success they’ve amassed.",
      lyrics: `[Intro: All, Rosé]
BLACKPINK!
(Ah yeah, ah yeah!)
BLACKPINK!
(Ah yeah, ah yeah!)

[Verse 1: Jennie, Lisa, All]
Ayy, chaghan eolgure geureoji mothan taedo (Huh)
Ganyeorin mommae sok garyeojin volumeeun du baero (Yah, yah, double up) (Woo!)
Geochimeopsi jikjin gudi bojin anhji nunchi
Black hamyeon Pink urin yeppeujanghan Savage (BLACKPINK!)
Wonhal ttaen daenohko ppaetji (Uh)
Neon mwol haedo kallo mul begi (Uh)
Du sonen gadeughan fat check
Gunggeumhamyeon haebwa fact check
Nun nopin kkokdaegi
Mul mannan mulgogi
Jom doghae nan Toxic
You hokae I'm Foxy

[Pre-Chorus: Rosé, Jisoo, Jennie]
Du beon saenggakae
Heunhan namdeulcheoreom chaghan cheogeun mot hanikka
Chaghakaji ma
Swipge useojuneun geon nal wihan geoya
Ajigeun jal moreugetji
Guji wonhamyeon test me
Neon bul bodeusi ppeonhae
Manmanhan geol wonhaetdamyeon
Oh, wait 'til I do what I do
See upcoming pop shows
Get tickets for your favorite artists

You might also like
Fortnight
Taylor Swift
So Long, London
Taylor Swift
BLACKPINK - Kill This Love (Romanized)
Genius Romanizations

[Chorus: Jennie, Jisoo]
Hit you with that ddu-du, ddu-du, du
(Ah yeah, ah yeah!)
Hit you with that ddu-du, ddu-du, du
(Ah yeah, ah yeah!)
Ddu-du, du-du-du-du-du

[Interlude: All]
(Hit you with that, hit you with that, hit you with that)
BLACKPINK!

[Verse 2: Jennie]
Jigeum naega geoleoganeun geolin
BLACKPINK 4 way sageori
Dongseonambuk sabangeulo run it
Need a bucket list ssak da I bought it
Neol dangineun geotdo meolli milchineun geotdo
Jemeotdaero haneun bad girl
Jogheon sileohageon nuga mwora hadeon
When the bass drop, it's another banger

[Pre-Chorus: Jisoo, Rosé, Jennie]
Du beon saenggakae
Heunhan namdeulcheoreom chaghan cheogeun mot hanikka
Chakgakaji ma
Swipge useojuneun geon nal wihan geoya
Ajigeun jal moreugetji
Guji wonhamyeon test me
Neon bul bodeusi ppeonhae
Manmanhan geol wonhaetdamyeon
Oh, wait 'til I do what I do


[Chorus: Lisa, Rosé, Jisoo]
Hit you with that ddu-du, ddu-du, du
(Ah yeah, ah yeah)
Hit you with that ddu-du, ddu-du, du
(Ah yeah, ah yeah)
Ddu-du, du-du-du-du-du

[Bridge: Rosé, Lisa]
What you gonna do when I
Come, come through with that, that, uh (Uh-huh)
What you gonna do when I
Come, come through with that, that, uh (Uh-huh)
Tteugeowo, tteugeowo, tteugeowo like fire (Fire)
(Ddu-du, du-du-du-du-du, ddu-du, du-du-du-du-du)
Tteugeowo, tteugeowo, tteugeowo like fire (Fire)
(Ddu-du, du-du-du-du-du, ddu-du, du-du-du-du-du)

[Drop: All, Rosé, Jisoo]
BLACKPINK! (Hey!)
(Ddu-du, du-du-du-du, du-du-du-du)
(Ah yeah, ah yeah, ah yeah, ah yeah!)
Tteugeowo, tteugeowo, tteugeowo like fire (Hey!)
Tteugeowo, tteugeowo, tteugeowo like fire

[Outro: Jennie]
Hit you with that ddu-du, ddu-du, du`,
      genre: "K-Pop",
      type: "Group",
    },

    15: {
      title: "Life Is Still Going On",
      artist: "NCT Dream",
      image: "../assets/kpop/nct.png",
      audio: "../assets/kpop/nct.mp3",
      year: 2021,
      desc: "Uplifting song with bright melodies and reassuring lyrics that remind listeners to keep going, even through tough times.",
      lyrics: `[Chorus: Haechan, Chenle]
Don't stop the music, 왜 멈춰 있어? (wae meomchwo isseo?)
춤추듯 돌아가, life is a party so (chumchudeut doraga, life is a party so)
딱히 뭘 안 해도, tick-tock, tick-tock (ttakhi mwol an haedo, tick-tock, tick-tock)
Life is still going on, 그저 흘러가 (geujeo heulleoga)
Hey, DJ play that song, 다음 노래 (daeum norae)
It's like a music box, 걱정은 그만해 (geokjeongeun geumanhae)
오늘은 즐겨봐 잠시라도 (oneureun jeulgyeobwa jamsirado)
Life is still going on, 암튼 흘러가 (amteun heulleoga)

[Verse 1: Mark, Jeno, Jisung]
야, 요즘 왜 그리 풀이 죽어 있어? (ya, yojeum wae geuri puri jugeo isseo?)
야, 어깨 좀 펴라 옆엔 내가 있어 (ya, eokkae jom pyeora yeoppen naega isseo)
인생이란 게 뜻대로 안 되지, uh? (insaengiran ge tteutdaero an doeji, uh?)
참 맘이란 게 맘대로 안 되지, uh? (cham mamiran ge mamdaero an doeji, uh?)
That's right
어른이 돼가나 봐, 사는 게 그런가 봐 (eoreuni dwaegana bwa, saneun ge geureonga bwa)
사람들 다 앞서 나가는 듯한, 나 혼자 멈춘 듯한 (saramdeul da apseo naganeun deuthan, na honja meomchun deuthan)
That's a life
어쩔 수 없는 듯한 막연한 불안함 (eojjeol su eomneun deuthan magyeonhan buranham)
Tell me if you're feeling that
나도 그래 가끔씩 (nado geurae gakkeumssik)

[Pre-Chorus: Renjun, Haechan]
고민 따윈 잠시 던져 놔 (gomin ttawin jamsi deonjyeo nwa)
To the sound of the music
마음속의 소릴 들어봐 (maeumsogui soril deureobwa)
원하는 건, do it, 그냥 do it (wonhaneun geon, do it, geunyang do it)

[Chorus: Jisung, Jaemin]
Don't stop the music, 왜 멈춰 있어? (wae meomchwo isseo?)
춤추듯 돌아가, life is a party so (chumchudeut doraga, life is a party so)
딱히 뭘 안 해도, tick-tock, tick-tock (ttakhi mwol an haedo, tick-tock, tick-tock)
Life is still going on, 그저 흘러가 (geujeo heulleoga)
Hey, DJ play that song, 다음 노래 (daeum norae)
It's like a music box, 걱정은 그만해 (geokjeongeun geumanhae)
오늘은 즐겨봐 잠시라도 (oneureun jeulgyeobwa jamsirado)
Life is still going on, 암튼 흘러가 (amteun heulleoga)

[Verse 2: Jeno, Mark, Jisung, Jaemin, Jaemin & Haechan]
자 다들 하잖아 괜한 짓 엄한짓두 (ja dadeul hajana gwaenhan jit eomhanjitdu)
누가 보면은 금방이라도 세상이 망한 줄 (nuga bomyeoneun geumbangirado sesangi manghan jul)
균형을 잡아가는 중 (Yeah), 헛발질 좀 한 것뿐 (gyunhyeongeul jabaganeun jung, heotbaljil jom han geotppun)
원기옥을 모았다 쏴 (Yeah), tick-tick-tick, boom (won-giokeul moatta sswa, tick-tick-tick, boom)
태엽을 감아, 다시 해도 괜찮아 (taeyeobeul gama, dasi haedo gwaenchana)
조금 비틀대다 혼자만의 리듬을 찾아 (jogeum biteuldaeda honjamanui rideumeul chaja)
잠깐 흔들려도 돼, 멀리 돌아가도 돼 (jamkkan heundeullyeodo dwae, meolli doragado dwae)
즐길 수 있으면 돼, 결국 행복하면 돼 (jeulgil su isseumyeon dwae, gyeolguk haengbokhamyeon dwae)

[Pre-Chorus: Chenle, Chenle & Haechan, Renjun, Renjun & Haechan]
고민 따윈 잠시 던져 놔 (gomin ttawin jamsi deonjyeo nwa)
To the sound of the music
마음속의 소릴 들어봐 (maeumsogui soril deureobwa)
원하는 건, do it, 그냥 do it (wonhaneun geon, do it, geunyang do it)

[Chorus: Mark, Chenle, Jeno, Renjun]
Don't stop the music, 왜 멈춰 있어? (wae meomchwo isseo?)
춤추듯 돌아가, life is a party so (chumchudeut doraga, life is a party so)
딱히 뭘 안 해도, tick-tock (Tick-tock, oh) tick-tock (ttakhi mwol an haedo, tick-tock, tick-tock)
Life is still going on, 그저 흘러가 (geujeo heulleoga)
(Oh) Hey, DJ play that song, 다음 노래 (daeum norae)
It's like a music box, 걱정은 그만해 (geokjeongeun geumanhae)
오늘은 즐겨봐 (Yeah) 잠시라도 (oneureun jeulgyeobwa jamsirado)
Life is still going on, 암튼 흘러가 (amteun heulleoga)

[Bridge: Jaemin, Jisung, Renjun, Haechan, Chenle, Jeno]
요즘 왜 그리 풀이 죽어 있어? Yeah, yeah, yeah, yeah (yojeum wae geuri puri jugeo isseo?)
어깨 좀 펴라 옆엔 내가 있어 oh, yeah (eokkae jom pyeora yeoppen naega isseo)
So let's go (Let's go)
그 어떤 것도 막지 못해 (geu eotteon geotdo makji mothae)
언젠가 지나갈 거야, 결국에 알게 될 거야 (eonjenga jinagal geoya, gyeolguke alge doel geoya)
So what you waiting for? (Waiting for?)
One, two, three, four

[Chorus: All, Haechan, Chenle, Renjun]
Don't stop the music, 왜 멈춰 있어? (Woo, ooh, woo) (wae meomchwo isseo?)
춤추듯 돌아가, life is a party so (chumchudeut doraga, life is a party so)
딱히 뭘 안 해도, tick-tock, tick-tock (ttakhi mwol an haedo, tick-tock, tick-tock)
Life is still going on (Yeah), 그저 흘러가 (geujeo heulleoga)
Hey, DJ play that song (Yeah), 다음 노래 (daeum norae)
It's like a music box, 걱정은 그만해 (geokjeongeun geumanhae)
오늘은 즐겨봐 (Oh), 잠시라도 (oneureun jeulgyeobwa jamsirado)
Life is still going on, 암튼 흘러가 (amteun heulleoga)

[Outro: Chenle]
Life is still going on
My life still goes on`,
      genre: "K-Pop",
      type: "Group",
    },
    
  };

  const song = songs[songId];

  if (song) {
    document.getElementById("banner-song-title").innerText = song.title;
    document.getElementById("banner-artist-name").innerText = song.artist;
    document.getElementById("banner-song-type").innerText = song.type;
    document.getElementById("banner-song-year").innerText = song.year;
    document.getElementById("banner-album-art").src = song.image;
    document.getElementById("banner-genre").innerText = song.genre
    document.getElementById("song-audio").src = song.audio;
    document.getElementById("song-desc").innerText = song.desc
    document.getElementById("song-lyrics").innerText = song.lyrics;
  } else {
    document.getElementById("banner-song-title").innerText = "Song not found";
  }


  // Banner image muter pas play, berhenti pas stop
  const audio = document.getElementById("song-audio");
    const albumArt = document.getElementById("banner-album-art");

    let angle = 0;
    let rotating = false;
    let animationFrame;

    function rotateDisc() {
      if (!rotating) return;
      angle += 0.12;
      albumArt.style.transform = `rotate(${angle}deg)`;
      animationFrame = requestAnimationFrame(rotateDisc);
    }

    audio.addEventListener("play", function () {
      if (!rotating) {
        rotating = true;
        rotateDisc();
      }
    });

    audio.addEventListener("pause", function () {
      rotating = false;
      cancelAnimationFrame(animationFrame);
    });


});

document.getElementById("back-btn").addEventListener("click", function () {
    const lastPage = sessionStorage.getItem("cg_lastPage");
    if (lastPage === "index.html" || lastPage === "sc.html" || lastPage === "pop.html" || lastPage === "rnb.html" || lastPage === "kpop.html") {
      window.location.href = lastPage;
    } else {
      window.location.href = "index.html";
    }
});