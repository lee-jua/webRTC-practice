import React from 'react';

const Streaming = () => {
    return (
        <div>

            <div id="container">
                <h1><a href="//webrtc.github.io/samples/" title="WebRTC samples homepage">WebRTC samples</a>
                    <span>Peer connection</span></h1>

                <p>This sample shows how to setup a connection between two peers using
                    <a href="https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection">RTCPeerConnection</a>.
                    An option to specify the <a href="https://webrtc.org/web-apis/chrome/unified-plan/">SDP
                        semantics</a> for
                    the connection is also available (unified-plan, plan-b or default).
                </p>

                <video id="localVideo" playsinline autoPlay muted></video>
                <video id="remoteVideo" playsinline autoPlay></video>

                <div className="box">
                    <button id="startButton">Start</button>
                    <button id="callButton">Call</button>
                    <button id="hangupButton">Hang Up</button>
                </div>

                <div className="box">
                    <span>SDP Semantics:</span>
                    <select id="sdpSemantics">
                        <option selected value="">Default</option>
                        <option value="unified-plan">Unified Plan</option>
                        <option value="plan-b">Plan B</option>
                    </select>
                </div>

                <p>View the console to see logging. The <code>MediaStream</code> object <code>localStream</code>, and
                    the <code>RTCPeerConnection</code>
                    objects <code>pc1</code> and <code>pc2</code> are in global scope, so you can inspect them in the
                    console as
                    well.</p>

                <p>For more information about RTCPeerConnection, see <a
                    href="http://www.html5rocks.com/en/tutorials/webrtc/basics/"
                    title="HTML5 Rocks article about WebRTC by Sam Dutton">Getting
                    Started With WebRTC</a>.</p>


                <a href="https://github.com/webrtc/samples/tree/gh-pages/src/content/peerconnection/pc1"
                   title="View source for this page on GitHub" id="viewSource">View source on GitHub</a>

            </div>
        </div>
    );
};

export default Streaming;