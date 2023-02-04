import { list } from "postcss"
import { useEffect, useReducer } from "react"

const lists = {
  ownerInfo: null,
  ownerDogs: [
    {
      id: 31,
      name: "Chika",
      ownerId: 4,
      ownerName: "Badi Owner",
      imageUrl: "https://bark-backend.azurewebsites.net/api/dog/image/517",
      dob: "2018-05-19T00:00:00",
      freeGroupId: null,
      isBanned: true,
      requireNeuteredSpayed: false,
      breed: "Affen Border Terrier",
      vaccinations: [
        {
          vaccinationId: 4,
          vaccinationName: "Distemper",
          status: "Verified",
        },
        {
          vaccinationId: 6,
          vaccinationName: "Influenza",
          status: "Verified",
        },
        {
          vaccinationId: 7,
          vaccinationName: "Leptospirosis",
          status: "Verified",
        },
      ],
      subscription: {
        id: 54,
        membershipName: "Annual Membership",
        status: "Active",
        statusDescription: "active",
        note: "stripe",
        paymentMethod: null,
        isExpired: false,
        expireDate: null,
      },
      status: "Red",
    },
    {
      id: 108,
      name: "Snoopy",
      ownerId: 4,
      ownerName: "Badi Owner",
      imageUrl: "https://bark-backend.azurewebsites.net/api/dog/image/460",
      dob: "2023-01-04T00:00:00",
      freeGroupId: 20,
      isBanned: false,
      requireNeuteredSpayed: true,
      breed: "Adronicus Mastiff",
      vaccinations: [
        {
          vaccinationId: 4,
          vaccinationName: "Distemper",
          status: "Verified",
        },
        { vaccinationId: 6, vaccinationName: "Influenza", status: "Missing" },
        {
          vaccinationId: 7,
          vaccinationName: "Leptospirosis",
          status: "Expired",
        },
      ],
      subscription: null,
      status: "Red",
    },
    {
      id: 118,
      name: "Banhar",
      ownerId: 4,
      ownerName: "Badi Owner",
      imageUrl: "https://bark-backend.azurewebsites.net/api/dog/image/555",
      dob: "2023-01-10T00:00:00",
      freeGroupId: null,
      isBanned: false,
      requireNeuteredSpayed: true,
      breed: "Adronicus Mastiff",
      vaccinations: [
        {
          vaccinationId: 4,
          vaccinationName: "Distemper",
          status: "Verified",
        },
        {
          vaccinationId: 6,
          vaccinationName: "Influenza",
          status: "Verified",
        },
        {
          vaccinationId: 7,
          vaccinationName: "Leptospirosis",
          status: "Verified",
        },
      ],
      subscription: {
        id: 65,
        membershipName: "Annual Membership",
        status: "Inactive",
        statusDescription: "active",
        note: "234",
        paymentMethod: null,
        isExpired: false,
        expireDate: null,
      },
      status: "Brown",
    },
  ],
}
function reducer(state, action) {
  // switch(action.type){
  //   case false :
  //     return ("ulaan")
  //   case true :
  //     return ("nogoon")
  // }
}
function DogLists() {

  const [state, dispatch] = useReducer(reducer, lists)

  return (
    <div>
      <pre>{JSON.stringify(lists, null, 2)}</pre>
      <form>
        
      </form>
    </div>
  )
}
export default DogLists

/**
 * Colors:
 * status red: #e3e8ee
 * status blue: #d6ecff
 * times red: #ec4758
 * check green: #1ab394
 * text-color: #337ab7
 * bg-secondary: #e7eaec
 */
