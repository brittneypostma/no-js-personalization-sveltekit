<p id="referer" />
<div class="wrapper">
	<h1>Personalize your static site using the HTTP referer header</h1>
	<p>This is a static page served from Netlify's CDN.</p>
	<p>
		Using Netlify Edge Functions, we can intercept a request to this page, check the value of the
		HTTP referer header, and modify the response of the HTML before it's returned to the browser. No
		client-side JavaScript required.
	</p>
	<a href="/">Click here to see the referer message.</a>
	<hr />
	<h2>Testing in development</h2>
	<ol>
		<li>
			Use the
			<a href="https://ntl.fyi/3Til6sY">Netlify CLI</a>
			to run this site locally
		</li>
		<li>
			Make sure the referer detection is set to http://localhost:8888/ and
			<a href="/">click here.</a>
		</li>
		<li>
			To remove the HTTP referer header and banner in development, navigate to
			http://localhost:8888/ without clicking on the link above.
		</li>
	</ol>
</div>
