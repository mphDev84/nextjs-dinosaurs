import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";

export default function FirstPost() {
	return (
		<>
			<div className="main-div">
				<Head>
					<title>Saurischian Dinosaurs</title>
				</Head>
				<Script
					src="https://connect.facebook.net/en_US/sdk.js"
					strategy="lazyOnload"
					onLoad={() => console.log("This script is loaded!!")}
				/>
				<h1 className="first-page-header">Saurischian Dinosaurs</h1>
				<p className="first-page-text">
					Saurischia, meaning "reptile-hipped" from the Greek sauros, meaning
					'lizard', and ischion, meaning 'hip joint'. It is one of the two basic
					divisions of dinosaurs (the other being{" "}
					<span className="page-link">
						<Link href="/posts/second-post">Ornithischia</Link>
					</span>
					). In 1888, Harry Seeley classified dinosaurs into two orders, based
					on their hip structure, though today most paleontologists classify
					Saurischia as an unranked clade rather than an order. All carnivorous
					dinosaurs (certain types of theropods) are traditionally classified as
					saurischians, as are all of the birds and one of the two primary
					lineages of herbivorous dinosaurs, the sauropodomorphs. At the end of
					the Cretaceous Period, all saurischians except the birds became
					extinct in the course of the Cretaceous–Paleogene extinction event.
					Birds, as direct descendants of one group of theropod dinosaurs, are a
					sub-clade of saurischian dinosaurs in phylogenetic classification.
					<br></br>
					Saurischian dinosaurs are traditionally distinguished from
					ornithischian dinosaurs by their three-pronged pelvic structure, with
					the pubis pointed forward. The ornithischians' pelvis is arranged with
					the pubis rotated backward, parallel with the ischium, often also with
					a forward-pointing process, giving a four-pronged structure. The
					saurischian hip structure led Seeley to name them "lizard-hipped"
					dinosaurs, because they retained the ancestral hip anatomy also found
					in modern lizards and other reptiles. He named ornithischians
					"bird-hipped" dinosaurs because their hip arrangement was
					superficially similar to that of birds, though he did not propose any
					specific relationship between ornithischians and birds. However, in
					the view which has long been held, this "bird-hipped" arrangement
					evolved several times independently in dinosaurs, first in the
					ornithischians, then in the lineage of saurischians including birds
					(Avialae), and lastly in the therizinosaurians. This would then be an
					example of convergent evolution: avialans, therizinosaurians, and
					ornithischian dinosaurs all developed a similar hip anatomy
					independently of each other, possibly as an adaptation to their
					herbivorous or omnivorous diets.
				</p>
				<Link href="/">
					<a>← Back to home</a>
				</Link>
			</div>
			<p>Some examples of Saurischian dinosaurs</p>
			<div className="dino-pics-wrapper">
				<div className="next-line-wrapper">
					<a
						href="https://www.nhm.ac.uk/discover/dino-directory/tyrannosaurus.html"
						target={"_blank."}
					>
						<Image
							priority
							src="/images/Tyrannosaurus Rex.jpeg"
							className="dino-pic"
							height={120}
							width={200}
							alt={"Trex"}
						/>
						<h4 className="dino-name">T rex</h4>
					</a>
				</div>
				<div className="next-line-wrapper">
					<a
						href="https://www.nhm.ac.uk/discover/dino-directory/brachiosaurus.html"
						target={"_blank."}
					>
						<Image
							priority
							src="/images/Brachiosaurus.jpeg"
							className="dino-pic"
							height={120}
							width={200}
							alt={"Brachiosaurs"}
						/>
						<h4 className="dino-name">Brachiosaurus</h4>
					</a>
				</div>
				<div className="next-line-wrapper">
					<a
						href="https://www.nhm.ac.uk/discover/dino-directory/diplodocus.html"
						target={"_blank."}
					>
						<Image
							priority
							src="/images/diplodocus.jpeg"
							className="dino-pic"
							height={120}
							width={200}
							alt={"Diplodocus"}
						/>
						<h4 className="dino-name">Diplodocus</h4>
					</a>
				</div>
			</div>
			<style jsx>{`
				.first-page-header {
					color: lightblue;
				}
				.main-div {
					border: red 1px solid;
					margin: 5em;
					padding: 10px;
					background-color: rgb(255, 55, 51, 0.8);
				}
				.first-page-text {
					font-family: georgia;
					font-size: 16px;
					letter-spacing: 2px;
					color: lightblue;
				}
				a {
					color: white;
				}
				a:hover {
					color: blue;
				}
				.dino-pics-wrapper {
					display: flex;
					flex-direction: row;
				}
				.next-line-wrapper {
					display: flex;
					flex-direction: column;
					margin-left: 10px;
				}
				.dino-name {
					color: white;
				}
			`}</style>
		</>
	);
}
