import Head from "next/head";
import Link from "next/link";
import Date from "../Components/Date";
import FirstComponent from "../Components/FirstComponent";
import Layout from "../Components/Layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import { createContext } from "react";

export const MyContext = createContext();

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	//the above calls the 'getSortedPOstsData' function in 'posts.js' and returns the file contents associated
	//with the filepath names
	const myValue = await fetch("https://jsonplaceholder.typicode.com/users");
	//the above fetch call is a simple API call to get user data and display on the page
	const fetchDataValue = await myValue.json();
	return {
		props: {
			allPostsData,
			fetchDataValue,
		},
	};
}

const name_01 = "matt";

//ABOVE we can see that the data is passed to the 'Home' function as props.

/**NOTE ABOUT ABOVE:::: By returning allPostsData inside the props object in getStaticProps,
 * the blog posts will be passed to the Home component as a prop. Now you can access the blog posts. ALSO,
 * getStaticProps will only run at BUILD TIME, so will render data only once. If data is updated frequently
 * by user requests, SERVER-SIDE RENDERING must be used*/

export default function Home({ allPostsData, fetchDataValue }) {
	return (
		<MyContext.Provider value={name_01}>
			<div className="container">
				<Head>
					<title>Dinosaur Info Website</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<main>
					<h1 className="title">Dinosaurs</h1>
					<br />
					<section
						className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
					>
						<ul className="blog-desc">
							{allPostsData.map(({ id, date, title }) => (
								<li className={utilStyles.listItem} key={id}>
									<Link href={`/posts/${id}`}>
										<a className="link-title">{title}</a>
									</Link>
									<br />
									<small className={utilStyles.lightText}>
										<Date dateString={date} />
									</small>
								</li>
							))}
						</ul>
					</section>

					<div className="layout-wrapper">
						<Layout>
							<h3 className="saurischian-dinos">
								Click {/**divides text over multiple lines */}
								<Link href="/posts/first-post">
									<a> here for Saurischian Dinosaurs</a>
								</Link>
							</h3>

							{/**  <ImageComponent /> */}
						</Layout>
						<div className="layout-seperator"></div>
						<Layout>
							<h3 className="ornithischian-dinos">
								Click {/**divides text over multiple lines */}
								<Link href="/posts/second-post">
									<a> here for Ornithschian Dinosaurs</a>
								</Link>
							</h3>
						</Layout>
					</div>
					<div className="grid">
						<a
							href="https://www.amnh.org/exhibitions/permanent/saurischian-dinosaurs"
							className="card"
							target="/blank"
						>
							<h3>More on Saurischian Dinosaurs &rarr;</h3>
							<p>American Museum Of Natural History</p>
						</a>

						<a
							href="https://www.amnh.org/exhibitions/permanent/ornithischian-dinosaurs"
							className="card"
							target="/blank"
						>
							<h3>More on Ornithischian Dinosaurs &rarr;</h3>
							<p>American Museum of Natural History</p>
						</a>
					</div>
				</main>

				<style jsx>{`
					.container {
						min-height: 100vh;
						padding: 0 0.5rem;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						background-image: url("../public/images/dinosaur.jpg");
						background-size: 1400px;
						background-position: 1em 0 1em 0;
					}

					main {
						padding: 5rem 0;
						flex: 1;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
					}
					footer {
						width: 100%;
						height: 100px;
						border-top: 1px solid #eaeaea;
						display: flex;
						justify-content: center;
						align-items: center;
					}

					footer img {
						margin-left: 0.5rem;
					}

					footer a {
						display: flex;
						justify-content: center;
						align-items: center;
					}

					a {
						color: white;
						text-decoration: none;
					}
					.link-title {
						color: white;
						background-color: black;
					}
					.layout-wrapper {
						display: flex;
						flex-direction: row;
					}
					.layout-seperator {
						border: 5px solid blue;
						max-width: 36rem;
						padding: 0 1rem;
						margin: 3rem auto 6rem;
						border-radius: 10px;
					}
					.ornithischian-dinos,
					.saurischian-dinos {
						color: rgb(0, 0, 99);
						font-family: georgia;
					}
					.ornithischian-dinos a:hover,
					.saurischian-dinos a:hover {
						text-decoration: underline;
						color: rgb(0, 255, 255);
					}

					.title {
						margin: 0;
						line-height: 1.15;
						font-size: 6rem;
						font-family: Ariel;
						letter-spacing: 10px;
						color: white;
						background-color: rgb(0, 77, 38, 0.4);
						width: 100%;
						border-radius: 50px;
					}

					.title,
					.description {
						text-align: center;
					}

					.description {
						line-height: 1.5;
						font-size: 1.5rem;
					}

					.blog-desc {
						color: white;
					}
					code {
						background: #fafafa;
						border-radius: 5px;
						padding: 0.75rem;
						font-size: 1.1rem;
						font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
							DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
					}

					.grid {
						display: flex;
						align-items: center;
						justify-content: center;
						flex-wrap: wrap;

						max-width: 800px;
						margin-top: 3rem;
					}

					.card {
						margin: 1rem;
						flex-basis: 45%;
						padding: 1.5rem;
						text-align: left;
						color: inherit;
						text-decoration: none;
						border: 5px solid #eaeaea;
						border-radius: 10px;
						transition: color 0.15s ease, border-color 0.15s ease;
						background-color: rgb(255, 255, 255, 0.4);
					}

					.card:hover,
					.card:focus,
					.card:active {
						color: rgb(0, 255, 255);
						border-color: green;
						transform: scale(1.05);
					}

					.card h3 {
						margin: 0 0 1rem 0;
						font-size: 1.5rem;
					}

					.card p {
						margin: 0;
						font-size: 1.25rem;
						line-height: 1.5;
						color: black;
						font-weight: bold;
					}
					.logo {
						height: 1em;
					}

					@media (max-width: 600px) {
						.grid {
							width: 100%;
							flex-direction: column;
						}
					}
				`}</style>

				<style jsx global>{`
					html,
					body {
						padding: 0;
						margin: 0;
						font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
							Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
							sans-serif;
					}

					* {
						box-sizing: border-box;
					}
				`}</style>
			</div>
		</MyContext.Provider>
	);
}

/**			<ul className="blog-desc">
						{fetchDataValue.map(({ id, name, username, email }) => (
							<li className={utilStyles.listItem} key={id}>
								{"ID: "}
								{id}
								{", Name: "}
								{name}
								<br />
								{username}
								<br />
								{email}
							</li>
						))}
					</ul> 
          
          <FirstComponent />
*/
