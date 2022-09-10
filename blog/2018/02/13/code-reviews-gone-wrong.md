# Code Reviews Gone Wrong

So I want to start off by saying that code reviews are great -- when they are done right doing code reviews properly is exceptionally difficult.

Code review is a great tool to ensure your teammates understand <em>what </em>you wrote, and most importantly, <em>why </em>you wrote it.  And if something isn't clear, now is your chance to debate about your approach. <em>Is your code too slow?</em> <em>Does it use too much memory?</em> <em>Are you creating a class that already exists elsewhere but neglected to look for it? Do you have an obvious bug?</em> <em>Does your naming scheme make sense given the requirements? </em>These are the types of questions we should be focusing on when doing code reviews.

But to do proper code reviews takes some serious discipline. Discipline in the sense that you're not nitpicking meaningless things, or things that can be automated and you focus on the meat of change set. Discipline in the sense that you're not creating a major pull request with thousands of lines of changes that put too much load on someone's cognitive functions.

A bit of a backstory: My boss joined the team some time ago and we both agreed that code reviews are important for us as a team, and for the company overall. In fact, the number of bugs dropped <strong>significantly</strong> once the team started taking code reviews much more seriously.

One day we decided to rewrite the core product of the company. We went from a Django rendered page with some Angular JS to a full blown Single Page Application (SAP) using Angular 2 (or 4 or whatever the hell it is now) and Django for the back end.

I tried creating a coding standards doc but that ended being futile when nobody would read it let alone even update it. This lead us having very similar conversations during code reviews that could've been avoided.

As time went on code reviews became more frequent and purposeful but a problem kept cropping up. My boss is very <em>very </em>detail oriented. So much so that he'd find the most obscure issue in a pull request. I'm talking about code, written with Visual Studio Code, like this would fail the review:
<pre>class Component {
  constructor(private http: HttpService) { }
}</pre>
Yes. This would not pass code review. I'm sure you're scratching your head. And I can't blame you.

The issue?
<pre> constructor(private http: HttpService) { }</pre>
should have been:
<pre> constructor(private http: HttpService) {}</pre>
See the difference? No? Here's a hint: Look at the braces.

So here's the thing. He's the boss. He says change <code>{ }</code> to <code>{}</code> and I will do it. With a smile. That's what I am paid to do and this is <em>not</em> a hill I want to die on.  At the same time I understand where he is coming from; code from all of us must look like any one of us could have written it. It's good for the health of the product. But when things like these are essentially the only comments in a pull request, you have to wonder if something is going on or if you're even doing code reviews properly.

Because of constant comments about, what I felt was,  trivial spacing I began to dread creating pull requests. The linter and code formatting tools missed these bits of info which means our continuous integration also did not catch the formatting issues.

I want to make it clear that the blame lies on me here. It's been established how he spacing <em>should </em>look but I kept failing <em>and became more frustrated</em>. If I were as detail oriented as he is then the pull requests would go more smoothly. At the same time, I like my editor to format the file on save so I don't have to worry about, what I feel is, trivial stuff like this.

I checked the tslint config to see if it would catch something like this too but there's no real setting for it without affecting the imports in a typescript file. I was genuinely stuck.

Eventually I made a little shell script to grep for all files that had <code>{ }</code> in them so I could try to preemptively fix them. At some point I plan to turn it into a git hook so I don't have to manually run it every time.

The other part where I feel we went wrong was some of our code reviews got to be huge, make reading the code extremely taxing mentally. There were parts I just skimmed over because it just got to be so much. I'm not proud of it. I failed the team there, especially if the code I skimmed over will end up being defective.

The large change sets couldn't really be avoided because the product was being rewritten from scratch.

I found an <a href="https://fullstack179835491.wordpress.com/2018/02/13/code-reviews-gone-wrong/" target="_blank" rel="noopener">interesting post </a> that explains how to keep code reviews more manageable.  The key take away was to read about 500 lines of code per hour for an hour at a time at most, ideally even less.  So I will start doing this with the next pull request. I will read up to 400 lines of code or for up to an hour at a time, whichever may come first.