import React from "react";
import { Card, CardBody, Badge } from "reactstrap";

import { Fade } from "react-reveal";

const ServiceCard = ({ service }) => {
	return (
		<Fade left duration={1000} distance="40px">
			<Card className="card-lift--hover shadow mt-4">
				<CardBody>
					<div className="d-flex px-3">
						<div className="pl-4">
							<h3 className="text-info">
								{service.name}
							</h3>
							<h6>{service.subHeader}</h6>
							{/* <Badge color="info" className="mr-1">
								{service.duration}
							</Badge> */}
							<p className="description mt-3">{service.desc}</p>
							{/* <ul>
								{service.descBullets
									? service.descBullets.map((desc) => {
											return <li key={desc}>{desc}</li>;
									  })
									: null}
							</ul> */}
						</div>
					</div>
				</CardBody>
			</Card>
		</Fade>
	);
};

export default ServiceCard;
