import { graphics } from "../portfolio";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import GraphicsCard from "../components/GraphicsCard";
import { Fade } from "react-reveal";

const Graphics = () => {
	return (
		<section className="section section-lg">
			<Container>
				<Fade bottom duration={1000} distance="30px">
					<div className="d-flex p-4">
						<div>
							<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
								<i className="fa fa-star text-info" />
							</div>
						</div>
						<div className="pl-4">
							<h4 className="display-3 text-info">
								Our works
							</h4>
						</div>
					</div>
					<Row className="row-grid align-items-center">
						{graphics.map((data, i) => {
							return (
								<Col key={i} lg={6}>
									<GraphicsCard data={data} />
								</Col>
							);
						})}
					</Row>
				</Fade>
			</Container>
		</section>
	);
};

export default Graphics;
