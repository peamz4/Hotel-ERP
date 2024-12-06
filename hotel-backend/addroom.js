const axios = require('axios');

const rooms = [
    {
        "room_id": "A3-002",
        "type": "Deluxe",
        "bed": 3,
        "extra_bed": "yes",
        "description": "A spacious deluxe room with premium amenities.",
        "price": 4555,
        "status": "available"
    },
    {
        "room_id": "C4-010",
        "type": "Connecting",
        "bed": 1,
        "extra_bed": "yes",
        "description": "Perfect connecting rooms for families or groups.",
        "price": 7117,
        "status": "occupied"
    },
    {
        "room_id": "B5-016",
        "type": "Suite",
        "bed": 1,
        "extra_bed": "yes",
        "description": "A luxurious suite with exclusive features.",
        "price": 8423,
        "status": "available"
    },
    {
        "room_id": "B3-016",
        "type": "Deluxe",
        "bed": 1,
        "extra_bed": "no",
        "description": "A spacious deluxe room with premium amenities.",
        "price": 5990,
        "status": "occupied"
    },
    {
        "room_id": "A2-014",
        "type": "Studio",
        "bed": 2,
        "extra_bed": "no",
        "description": "A compact studio room with all essentials.",
        "price": 2925,
        "status": "occupied"
    },
    {
        "room_id": "C2-009",
        "type": "Standard",
        "bed": 1,
        "extra_bed": "yes",
        "description": "A cozy standard room, ideal for travelers.",
        "price": 3866,
        "status": "occupied"
    },
    {
        "room_id": "C2-001",
        "type": "Standard",
        "bed": 3,
        "extra_bed": "no",
        "description": "A cozy standard room, ideal for travelers.",
        "price": 3294,
        "status": "occupied"
    },
    {
        "room_id": "A3-011",
        "type": "Deluxe",
        "bed": 1,
        "extra_bed": "no",
        "description": "A spacious deluxe room with premium amenities.",
        "price": 4766,
        "status": "occupied"
    },
    {
        "room_id": "C2-018",
        "type": "Connecting",
        "bed": 1,
        "extra_bed": "no",
        "description": "Perfect connecting rooms for families or groups.",
        "price": 8748,
        "status": "renovating"
    },
    {
        "room_id": "C2-005",
        "type": "Connecting",
        "bed": 2,
        "extra_bed": "yes",
        "description": "Perfect connecting rooms for families or groups.",
        "price": 9910,
        "status": "occupied"
    },
    {
        "room_id": "A1-016",
        "type": "Connecting",
        "bed": 3,
        "extra_bed": "no",
        "description": "Perfect connecting rooms for families or groups.",
        "price": 8093,
        "status": "occupied"
    },
    {
        "room_id": "C4-002",
        "type": "Connecting",
        "bed": 1,
        "extra_bed": "no",
        "description": "Perfect connecting rooms for families or groups.",
        "price": 8468,
        "status": "occupied"
    },
    {
        "room_id": "B5-018",
        "type": "Suite",
        "bed": 2,
        "extra_bed": "no",
        "description": "A luxurious suite with exclusive features.",
        "price": 7033,
        "status": "available"
    },
    {
        "room_id": "A5-007",
        "type": "Standard",
        "bed": 1,
        "extra_bed": "yes",
        "description": "A cozy standard room, ideal for travelers.",
        "price": 3700,
        "status": "occupied"
    },
    {
        "room_id": "C3-008",
        "type": "Connecting",
        "bed": 2,
        "extra_bed": "yes",
        "description": "Perfect connecting rooms for families or groups.",
        "price": 8423,
        "status": "occupied"
    },
    {
        "room_id": "C3-007",
        "type": "Standard",
        "bed": 1,
        "extra_bed": "no",
        "description": "A cozy standard room, ideal for travelers.",
        "price": 3655,
        "status": "available"
    },
    {
        "room_id": "A3-008",
        "type": "Studio",
        "bed": 1,
        "extra_bed": "no",
        "description": "A compact studio room with all essentials.",
        "price": 3190,
        "status": "renovating"
    },
    {
        "room_id": "A1-011",
        "type": "Studio",
        "bed": 1,
        "extra_bed": "no",
        "description": "A compact studio room with all essentials.",
        "price": 3082,
        "status": "occupied"
    },
    {
        "room_id": "B4-004",
        "type": "Connecting",
        "bed": 3,
        "extra_bed": "no",
        "description": "Perfect connecting rooms for families or groups.",
        "price": 9957,
        "status": "occupied"
    },
    {
        "room_id": "A1-001",
        "type": "Connecting",
        "bed": 3,
        "extra_bed": "yes",
        "description": "Perfect connecting rooms for families or groups.",
        "price": 7047,
        "status": "available"
    },
    {
        "room_id": "A5-011",
        "type": "Standard",
        "bed": 3,
        "extra_bed": "no",
        "description": "A cozy standard room, ideal for travelers.",
        "price": 3145,
        "status": "occupied"
    },
    {
        "room_id": "B5-013",
        "type": "Connecting",
        "bed": 2,
        "extra_bed": "yes",
        "description": "Perfect connecting rooms for families or groups.",
        "price": 8685,
        "status": "renovating"
    },
    {
        "room_id": "B1-019",
        "type": "Connecting",
        "bed": 3,
        "extra_bed": "yes",
        "description": "Perfect connecting rooms for families or groups.",
        "price": 8353,
        "status": "renovating"
    },
    {
        "room_id": "C4-017",
        "type": "Studio",
        "bed": 2,
        "extra_bed": "yes",
        "description": "A compact studio room with all essentials.",
        "price": 3038,
        "status": "available"
    },
    {
        "room_id": "C3-020",
        "type": "Deluxe",
        "bed": 2,
        "extra_bed": "yes",
        "description": "A spacious deluxe room with premium amenities.",
        "price": 5184,
        "status": "renovating"
    },
    {
        "room_id": "B1-016",
        "type": "Deluxe",
        "bed": 1,
        "extra_bed": "yes",
        "description": "A spacious deluxe room with premium amenities.",
        "price": 5222,
        "status": "occupied"
    },
    {
        "room_id": "C2-007",
        "type": "Studio",
        "bed": 3,
        "extra_bed": "no",
        "description": "A compact studio room with all essentials.",
        "price": 2911,
        "status": "available"
    },
    {
        "room_id": "C5-010",
        "type": "Studio",
        "bed": 2,
        "extra_bed": "yes",
        "description": "A compact studio room with all essentials.",
        "price": 2851,
        "status": "occupied"
    },
    {
        "room_id": "A5-002",
        "type": "Studio",
        "bed": 3,
        "extra_bed": "no",
        "description": "A compact studio room with all essentials.",
        "price": 3375,
        "status": "available"
    },
    {
        "room_id": "A1-001",
        "type": "Suite",
        "bed": 1,
        "extra_bed": "yes",
        "description": "A luxurious suite with exclusive features.",
        "price": 7801,
        "status": "available"
    },
    {
        "room_id": "C4-018",
        "type": "Studio",
        "bed": 3,
        "extra_bed": "no",
        "description": "A compact studio room with all essentials.",
        "price": 3439,
        "status": "available"
    },
    {
        "room_id": "A1-008",
        "type": "Connecting",
        "bed": 3,
        "extra_bed": "yes",
        "description": "Perfect connecting rooms for families or groups.",
        "price": 8295,
        "status": "renovating"
    },
    {
        "room_id": "B5-012",
        "type": "Deluxe",
        "bed": 3,
        "extra_bed": "no",
        "description": "A spacious deluxe room with premium amenities.",
        "price": 5108,
        "status": "renovating"
    },
    {
        "room_id": "A5-008",
        "type": "Studio",
        "bed": 2,
        "extra_bed": "no",
        "description": "A compact studio room with all essentials.",
        "price": 3238,
        "status": "renovating"
    },
    {
        "room_id": "B5-012",
        "type": "Standard",
        "bed": 1,
        "extra_bed": "yes",
        "description": "A cozy standard room, ideal for travelers.",
        "price": 3582,
        "status": "renovating"
    },
    {
        "room_id": "C2-020",
        "type": "Standard",
        "bed": 3,
        "extra_bed": "yes",
        "description": "A cozy standard room, ideal for travelers.",
        "price": 3058,
        "status": "occupied"
    },
    {
        "room_id": "B1-005",
        "type": "Deluxe",
        "bed": 2,
        "extra_bed": "no",
        "description": "A spacious deluxe room with premium amenities.",
        "price": 5378,
        "status": "occupied"
    },
    {
        "room_id": "B1-015",
        "type": "Suite",
        "bed": 2,
        "extra_bed": "yes",
        "description": "A luxurious suite with exclusive features.",
        "price": 6354,
        "status": "occupied"
    },
    {
        "room_id": "C2-008",
        "type": "Suite",
        "bed": 2,
        "extra_bed": "no",
        "description": "A luxurious suite with exclusive features.",
        "price": 8359,
        "status": "available"
    },
    {
        "room_id": "B1-008",
        "type": "Studio",
        "bed": 3,
        "extra_bed": "no",
        "description": "A compact studio room with all essentials.",
        "price": 3162,
        "status": "renovating"
    },
    {
        "room_id": "A2-010",
        "type": "Suite",
        "bed": 1,
        "extra_bed": "no",
        "description": "A luxurious suite with exclusive features.",
        "price": 7564,
        "status": "available"
    },
    {
        "room_id": "A5-011",
        "type": "Standard",
        "bed": 3,
        "extra_bed": "no",
        "description": "A cozy standard room, ideal for travelers.",
        "price": 3430,
        "status": "renovating"
    },
    {
        "room_id": "B1-002",
        "type": "Standard",
        "bed": 1,
        "extra_bed": "yes",
        "description": "A cozy standard room, ideal for travelers.",
        "price": 3313,
        "status": "renovating"
    },
    {
        "room_id": "A1-011",
        "type": "Suite",
        "bed": 3,
        "extra_bed": "yes",
        "description": "A luxurious suite with exclusive features.",
        "price": 7702,
        "status": "occupied"
    },
    {
        "room_id": "A2-013",
        "type": "Suite",
        "bed": 2,
        "extra_bed": "yes",
        "description": "A luxurious suite with exclusive features.",
        "price": 6391,
        "status": "renovating"
    },
    {
        "room_id": "B2-011",
        "type": "Connecting",
        "bed": 1,
        "extra_bed": "no",
        "description": "Perfect connecting rooms for families or groups.",
        "price": 8417,
        "status": "renovating"
    },
    {
        "room_id": "C2-020",
        "type": "Suite",
        "bed": 3,
        "extra_bed": "no",
        "description": "A luxurious suite with exclusive features.",
        "price": 6624,
        "status": "occupied"
    },
    {
        "room_id": "C2-002",
        "type": "Studio",
        "bed": 3,
        "extra_bed": "yes",
        "description": "A compact studio room with all essentials.",
        "price": 3172,
        "status": "renovating"
    },
    {
        "room_id": "B1-018",
        "type": "Standard",
        "bed": 3,
        "extra_bed": "yes",
        "description": "A cozy standard room, ideal for travelers.",
        "price": 3807,
        "status": "occupied"
    },
    {
        "room_id": "B1-014",
        "type": "Standard",
        "bed": 2,
        "extra_bed": "yes",
        "description": "A cozy standard room, ideal for travelers.",
        "price": 3272,
        "status": "renovating"
    },
    {
        "room_id": "B5-002",
        "type": "Deluxe",
        "bed": 2,
        "extra_bed": "yes",
        "description": "A spacious deluxe room with premium amenities.",
        "price": 5781,
        "status": "renovating"
    },
    {
        "room_id": "A3-006",
        "type": "Connecting",
        "bed": 1,
        "extra_bed": "no",
        "description": "Perfect connecting rooms for families or groups.",
        "price": 8241,
        "status": "occupied"
    },
    {
        "room_id": "B3-016",
        "type": "Connecting",
        "bed": 3,
        "extra_bed": "yes",
        "description": "Perfect connecting rooms for families or groups.",
        "price": 7441,
        "status": "available"
    },
    {
        "room_id": "A1-006",
        "type": "Deluxe",
        "bed": 3,
        "extra_bed": "yes",
        "description": "A spacious deluxe room with premium amenities.",
        "price": 5590,
        "status": "renovating"
    },
    {
        "room_id": "A4-012",
        "type": "Deluxe",
        "bed": 2,
        "extra_bed": "yes",
        "description": "A spacious deluxe room with premium amenities.",
        "price": 5585,
        "status": "renovating"
    },
    {
        "room_id": "C5-018",
        "type": "Deluxe",
        "bed": 3,
        "extra_bed": "no",
        "description": "A spacious deluxe room with premium amenities.",
        "price": 5157,
        "status": "renovating"
    },
    {
        "room_id": "C1-015",
        "type": "Standard",
        "bed": 2,
        "extra_bed": "yes",
        "description": "A cozy standard room, ideal for travelers.",
        "price": 3681,
        "status": "occupied"
    },
    {
        "room_id": "C1-007",
        "type": "Deluxe",
        "bed": 2,
        "extra_bed": "no",
        "description": "A spacious deluxe room with premium amenities.",
        "price": 5971,
        "status": "renovating"
    },
    {
        "room_id": "C5-008",
        "type": "Suite",
        "bed": 2,
        "extra_bed": "yes",
        "description": "A luxurious suite with exclusive features.",
        "price": 7574,
        "status": "renovating"
    },
    {
        "room_id": "A4-016",
        "type": "Connecting",
        "bed": 2,
        "extra_bed": "yes",
        "description": "Perfect connecting rooms for families or groups.",
        "price": 9944,
        "status": "occupied"
    },
    {
        "room_id": "C2-017",
        "type": "Connecting",
        "bed": 1,
        "extra_bed": "no",
        "description": "Perfect connecting rooms for families or groups.",
        "price": 8874,
        "status": "available"
    },
    {
        "room_id": "B3-020",
        "type": "Connecting",
        "bed": 1,
        "extra_bed": "no",
        "description": "Perfect connecting rooms for families or groups.",
        "price": 9919,
        "status": "available"
    },
    {
        "room_id": "A2-016",
        "type": "Deluxe",
        "bed": 1,
        "extra_bed": "yes",
        "description": "A spacious deluxe room with premium amenities.",
        "price": 4113,
        "status": "occupied"
    },
    {
        "room_id": "A3-001",
        "type": "Standard",
        "bed": 2,
        "extra_bed": "no",
        "description": "A cozy standard room, ideal for travelers.",
        "price": 3984,
        "status": "available"
    },
    {
        "room_id": "B5-013",
        "type": "Connecting",
        "bed": 1,
        "extra_bed": "no",
        "description": "Perfect connecting rooms for families or groups.",
        "price": 8943,
        "status": "available"
    },
    {
        "room_id": "B5-003",
        "type": "Suite",
        "bed": 1,
        "extra_bed": "no",
        "description": "A luxurious suite with exclusive features.",
        "price": 7297,
        "status": "occupied"
    },
    {
        "room_id": "B2-017",
        "type": "Standard",
        "bed": 2,
        "extra_bed": "yes",
        "description": "A cozy standard room, ideal for travelers.",
        "price": 3946,
        "status": "occupied"
    },
    {
        "room_id": "A1-008",
        "type": "Studio",
        "bed": 3,
        "extra_bed": "no",
        "description": "A compact studio room with all essentials.",
        "price": 2764,
        "status": "renovating"
    },
    {
        "room_id": "C1-006",
        "type": "Connecting",
        "bed": 2,
        "extra_bed": "yes",
        "description": "Perfect connecting rooms for families or groups.",
        "price": 8241,
        "status": "renovating"
    },
    {
        "room_id": "C5-008",
        "type": "Standard",
        "bed": 2,
        "extra_bed": "yes",
        "description": "A cozy standard room, ideal for travelers.",
        "price": 3319,
        "status": "occupied"
    },
    {
        "room_id": "C4-019",
        "type": "Studio",
        "bed": 2,
        "extra_bed": "yes",
        "description": "A compact studio room with all essentials.",
        "price": 2515,
        "status": "renovating"
    },
    {
        "room_id": "B1-006",
        "type": "Studio",
        "bed": 1,
        "extra_bed": "no",
        "description": "A compact studio room with all essentials.",
        "price": 2616,
        "status": "renovating"
    },
    {
        "room_id": "B1-013",
        "type": "Deluxe",
        "bed": 3,
        "extra_bed": "yes",
        "description": "A spacious deluxe room with premium amenities.",
        "price": 5053,
        "status": "occupied"
    },
    {
        "room_id": "C2-013",
        "type": "Connecting",
        "bed": 3,
        "extra_bed": "yes",
        "description": "Perfect connecting rooms for families or groups.",
        "price": 9641,
        "status": "renovating"
    },
    {
        "room_id": "B5-004",
        "type": "Suite",
        "bed": 3,
        "extra_bed": "no",
        "description": "A luxurious suite with exclusive features.",
        "price": 6836,
        "status": "occupied"
    },
    {
        "room_id": "C2-009",
        "type": "Suite",
        "bed": 3,
        "extra_bed": "no",
        "description": "A luxurious suite with exclusive features.",
        "price": 7404,
        "status": "occupied"
    },
    {
        "room_id": "A5-016",
        "type": "Connecting",
        "bed": 3,
        "extra_bed": "no",
        "description": "Perfect connecting rooms for families or groups.",
        "price": 9956,
        "status": "occupied"
    },
    {
        "room_id": "B1-012",
        "type": "Deluxe",
        "bed": 3,
        "extra_bed": "no",
        "description": "A spacious deluxe room with premium amenities.",
        "price": 5068,
        "status": "renovating"
    },
    {
        "room_id": "B4-004",
        "type": "Connecting",
        "bed": 2,
        "extra_bed": "no",
        "description": "Perfect connecting rooms for families or groups.",
        "price": 8277,
        "status": "available"
    },
    {
        "room_id": "B4-018",
        "type": "Studio",
        "bed": 2,
        "extra_bed": "no",
        "description": "A compact studio room with all essentials.",
        "price": 3469,
        "status": "renovating"
    },
    {
        "room_id": "B4-015",
        "type": "Studio",
        "bed": 2,
        "extra_bed": "no",
        "description": "A compact studio room with all essentials.",
        "price": 2833,
        "status": "occupied"
    },
    {
        "room_id": "B5-016",
        "type": "Suite",
        "bed": 2,
        "extra_bed": "yes",
        "description": "A luxurious suite with exclusive features.",
        "price": 8819,
        "status": "renovating"
    },
    {
        "room_id": "C3-002",
        "type": "Studio",
        "bed": 3,
        "extra_bed": "no",
        "description": "A compact studio room with all essentials.",
        "price": 3334,
        "status": "available"
    },
    {
        "room_id": "C4-011",
        "type": "Standard",
        "bed": 3,
        "extra_bed": "no",
        "description": "A cozy standard room, ideal for travelers.",
        "price": 3402,
        "status": "available"
    },
    {
        "room_id": "C4-015",
        "type": "Deluxe",
        "bed": 1,
        "extra_bed": "yes",
        "description": "A spacious deluxe room with premium amenities.",
        "price": 5259,
        "status": "occupied"
    },
    {
        "room_id": "C2-007",
        "type": "Deluxe",
        "bed": 1,
        "extra_bed": "no",
        "description": "A spacious deluxe room with premium amenities.",
        "price": 5950,
        "status": "available"
    },
    {
        "room_id": "B1-015",
        "type": "Connecting",
        "bed": 3,
        "extra_bed": "no",
        "description": "Perfect connecting rooms for families or groups.",
        "price": 7176,
        "status": "occupied"
    },
    {
        "room_id": "A1-007",
        "type": "Deluxe",
        "bed": 1,
        "extra_bed": "no",
        "description": "A spacious deluxe room with premium amenities.",
        "price": 5895,
        "status": "available"
    },
    {
        "room_id": "B5-014",
        "type": "Connecting",
        "bed": 3,
        "extra_bed": "no",
        "description": "Perfect connecting rooms for families or groups.",
        "price": 8779,
        "status": "available"
    },
    {
        "room_id": "B2-005",
        "type": "Suite",
        "bed": 3,
        "extra_bed": "no",
        "description": "A luxurious suite with exclusive features.",
        "price": 8537,
        "status": "renovating"
    },
    {
        "room_id": "A4-019",
        "type": "Suite",
        "bed": 3,
        "extra_bed": "no",
        "description": "A luxurious suite with exclusive features.",
        "price": 7851,
        "status": "renovating"
    },
    {
        "room_id": "B2-011",
        "type": "Suite",
        "bed": 1,
        "extra_bed": "no",
        "description": "A luxurious suite with exclusive features.",
        "price": 6623,
        "status": "renovating"
    },
    {
        "room_id": "B4-008",
        "type": "Standard",
        "bed": 2,
        "extra_bed": "no",
        "description": "A cozy standard room, ideal for travelers.",
        "price": 3492,
        "status": "occupied"
    },
    {
        "room_id": "C3-017",
        "type": "Deluxe",
        "bed": 2,
        "extra_bed": "yes",
        "description": "A spacious deluxe room with premium amenities.",
        "price": 4804,
        "status": "available"
    },
    {
        "room_id": "A4-001",
        "type": "Studio",
        "bed": 2,
        "extra_bed": "yes",
        "description": "A compact studio room with all essentials.",
        "price": 3080,
        "status": "renovating"
    },
    {
        "room_id": "A5-008",
        "type": "Standard",
        "bed": 3,
        "extra_bed": "yes",
        "description": "A cozy standard room, ideal for travelers.",
        "price": 3038,
        "status": "renovating"
    },
    {
        "room_id": "C2-006",
        "type": "Connecting",
        "bed": 3,
        "extra_bed": "yes",
        "description": "Perfect connecting rooms for families or groups.",
        "price": 8323,
        "status": "available"
    },
    {
        "room_id": "C1-009",
        "type": "Suite",
        "bed": 1,
        "extra_bed": "no",
        "description": "A luxurious suite with exclusive features.",
        "price": 8260,
        "status": "occupied"
    }
]

const addRoom = async () => {
    try {
        for (let room of rooms) {
            const res = await axios.post('http://localhost:3001/api/v1/rooms/create', room);
            console.log(res.data);
        }
    } catch (error) {
        console.error(error);
    }
}

addRoom();