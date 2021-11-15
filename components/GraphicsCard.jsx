import React from "react";
import { Card, CardBody, Badge } from "reactstrap";

import { Fade } from "react-reveal";
import Image from "next/image";

const GraphicsCard = ({ data }) => {
	return (
		<Fade left duration={1000} distance="30px">
			<Card className="card-lift--hover shadow mt-4">
				<CardBody>
					<div className="d-flex px-3">
						<div className="pl-4">
							<h5 className="text-info">{data.name}</h5>
							<p className="description mt-3">{data.desc}</p>
                            <Image 
                                src={data.link}
                                width={"100px"}
								height={"100px"}
								alt={data.companylogo}
                            />
						</div>
					</div>
				</CardBody>
			</Card>
		</Fade>
	);
};

export default GraphicsCard;
