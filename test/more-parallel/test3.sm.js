//Generated on Thursday, February 21, 2013 19:49:12 by the SCION SCXML compiler









module.exports = {
    "": "http://www.w3.org/2005/07/scxml",
    "states": [
        {
            "id": "p",
            "type": "parallel",
            "states": [
                {
                    "id": "a",
                    "transitions": [
                        {
                            "event": "t",
                            "target": "a2"
                        }
                    ],
                    "states": [
                        {
                            "id": "a1"
                        },
                        {
                            "id": "a2"
                        }
                    ]
                },
                {
                    "id": "b",
                    "states": [
                        {
                            "id": "b1",
                            "transitions": [
                                {
                                    "event": "t",
                                    "target": "b2"
                                }
                            ]
                        },
                        {
                            "id": "b2"
                        }
                    ]
                }
            ]
        }
    ]
};
