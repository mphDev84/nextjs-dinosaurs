import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";

export default function SecondPost() {
	return (
		<>
			<div className="main-div">
				<Head>
					<title>Ornithischian Dinosaurs</title>
				</Head>
				<Script
					src="https://connect.facebook.net/en_US/sdk.js"
					strategy="lazyOnload"
					onLoad={() => console.log("This script is loaded!!")}
				/>
				<h1 className="first-page-header">Ornithischian Dinosaurs</h1>
				<p className="first-page-text">
					Ornithischia is an extinct order of mainly herbivorous dinosaurs
					characterized by a pelvic structure superficially similar to that of
					birds. The name Ornithischia, or "bird-hipped", reflects this
					similarity and is derived from the Greek stem ornith, meaning "of a
					bird", and ischion, plural ischia, meaning "hip joint". However, birds
					are only distantly related to this group as birds are theropod
					dinosaurs (part of{" "}
					<span classname="link">
						<Link href="/posts/first-post">Saurischia</Link>
					</span>
					). Ornithischians with well known anatomical adaptations include the
					ceratopsians or "horn-faced" dinosaurs (e.g. Triceratops), armored
					dinosaurs (Thyreophora) such as stegosaurs and ankylosaurs,
					pachycephalosaurs and the ornithopods. There is strong evidence that
					certain groups of ornithischians lived in herds, often segregated by
					age group, with juveniles forming their own flocks separate from
					adults. Some were at least partially covered in filamentous (hair- or
					feather- like) pelts, and there is much debate over whether these
					filaments found in specimens of Tianyulong, Psittacosaurus, and
					Kulindadromeus may have been primitive feathers.
					<br></br>
					In 1887, Harry Seeley divided Dinosauria into two clades: Ornithischia
					and Saurischia. Ornithischia is a strongly supported clade with an
					abundance of diagnostic characters (common traits). The two most
					notable traits are a "bird-like" hip and beak-like predentary
					structure, though they shared other features as well. Early
					ornithischians were relatively small dinosaurs, averaging about 1–2
					meters in body length, with a triangular skull that had large circular
					orbits on the sides. This suggests that early ornithischians had
					relatively huge eyes that faced laterally. The forelimbs of early
					ornithischians are considerably shorter than their hindlimbs. A small
					forelimb such as those present in early ornithischians would not have
					been useful for locomotion, and it is evident that early
					ornithischians were bipedal dinosaurs. The entire skeleton was lightly
					built, with a largely fenestrated skull and a very stout neck and
					trunk. The tail is nearly half of the dinosaurs' overall length. The
					long tail presumably acted as a counterbalance and as a compensating
					mechanism for shifts in the creature's center of gravity. The
					hindlimbs of early ornithischians show that the tibia is considerably
					longer than the femur, a feature that suggests that early
					ornithischians were adapted for bipedality, and were fast runners.
				</p>
				<Link href="/">
					<a>← Back to home</a>
				</Link>
			</div>
			<div>
				<p>Some examples of Ornithischian dinosaurs</p>
				<div className="dino-pics-wrapper">
					<div className="next-line-wrapper">
						<a
							href="https://www.nhm.ac.uk/discover/dino-directory/stegosaurus.html"
							target={"_blank."}
						>
							<Image
								priority
								src="/images/stegosaurus.jpg"
								className="dino-pic"
								height={120}
								width={200}
								alt={"Stegosaurus"}
							/>
							<h4 className="dino-name">Stegosaurus</h4>
						</a>
					</div>
					<div className="next-line-wrapper">
						<a
							href="https://www.nhm.ac.uk/discover/dino-directory/triceratops.html"
							target={"_blank."}
						>
							<Image
								priority
								src="/images/trike.jpeg"
								className="dino-pic"
								height={120}
								width={200}
								alt={"Triceratops"}
							/>
							<h4 className="dino-name">Triceratops</h4>
						</a>
					</div>
					<div className="next-line-wrapper">
						<a
							href="https://www.nhm.ac.uk/discover/dino-directory/parasaurolophus.html"
							target={"_blank."}
						>
							<Image
								priority
								src="/images/para.jpg"
								className="dino-pic"
								height={120}
								width={200}
								alt={"Diplodocus"}
							/>
							<h4 className="dino-name">Parasaurolophus</h4>
						</a>
					</div>
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
