const users = [
  {
    profileImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    heading: "James Anderson",
    para: "A passionate developer who loves building creative digital experiences.",
  },
  {
    profileImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400",
    heading: "Sophia Williams",
    para: "A creative designer focused on beautiful and meaningful user experiences.",
  },
  {
    profileImage:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
    heading: "Michael Smith",
    para: "Technology enthusiast exploring modern web development and innovation.",
  },
  {
    profileImage:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400",
    heading: "Emma Johnson",
    para: "A photographer who captures beautiful moments through her lens.",
  },
  {
    profileImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    heading: "David Miller",
    para: "An entrepreneur passionate about business, leadership and technology.",
  },
  {
    profileImage:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400",
    heading: "Olivia Brown",
    para: "A digital creator sharing inspiration, lifestyle and creative ideas.",
  },
  {
    profileImage:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=400",
    heading: "Daniel Wilson",
    para: "A software engineer who enjoys solving complex problems.",
  },
  {
    profileImage:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400",
    heading: "Isabella Taylor",
    para: "A travel enthusiast exploring new cultures and amazing destinations.",
  },
  {
    profileImage:
      "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400",
    heading: "Alexander Thomas",
    para: "A fitness enthusiast dedicated to discipline, strength and personal growth.",
  },
  {
    profileImage:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400",
    heading: "Mia Davis",
    para: "A fashion enthusiast who loves creativity, style and modern trends.",
  },
];

function createCards() {
  let clutter = "";
  users.forEach(function (dets) {
    clutter += `
     <div class="card">
      <img src=${dets.profileImage} alt="" />
      <div class="card-para">
        <h2>${dets.heading}</h2>
        <p>${dets.para}</p>
      </div>
    </div>;`;
  });

  document.querySelector("main").innerHTML = clutter;
}

createCards();
