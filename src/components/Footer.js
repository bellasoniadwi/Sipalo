import React from "react";

function Footer(){
    return(
        <footer className="footer">
				<div className="container-fluid">
					<div className="row text-muted">
						<div className="col-6 text-start">
							<p className="mb-0">
								<a className="text-muted" href="https://adminkit.io/" target="_blank"><strong>Template by AdminKit</strong></a>
							</p>
						</div>
						<div className="col-6 text-end">
							<ul className="list-inline">
								<li className="list-inline-item">
									Framework-based Programming by
								</li>
								<li className="list-inline-item">
									<a className="text-muted" href="https://www.instagram.com/anjani.dwilestari" target="_blank">Anjani</a> - 
								</li>
								<li className="list-inline-item">
									<a className="text-muted" href="https://www.instagram.com/bellasoniaa_" target="_blank">Bella</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
    )
}

export default Footer