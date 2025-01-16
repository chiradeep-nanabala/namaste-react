import React from 'react';
import ReactDOM from 'react-dom/client';


/**
 * Header
 *  - Logo
 *  - Nav Items
 * 
 * Body
 *  - Search
 *  - Restaurant Container
 *      - Restaurant Card
 * 
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://thumbs.dreamstime.com/b/food-delivery-logo-template-vector-icon-illustration-170869600.jpg"></img>
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const styleCard = {
    background: "#f0f0f0"
};

const RestaurantCard = (props) => {
    const {info} = props;
    return (
        <div className="res-card" style={styleCard}>
            <div className="res-name">{info.name}</div>
            <div className="res-image">
                <img className="res-imagelogo" 
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + info.cloudinaryImageId}></img>
            </div>
            <div className="res-rating">{info.totalRatingsString} stars</div>
            <div className="res-cuisine">{info.cuisines.join(', ')}</div>
        </div>
    );
};

restaurants = [
    {
      "info": {
        "id": "23682",
        "name": "McDonald's",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/e83494ee-3c0b-4194-abd3-4619fa906aab_23682.jpg",
        "locality": "HSR Layout",
        "areaName": "HSR Layout",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Beverages",
          "Cafe",
          "Desserts"
        ],
        "avgRating": 4.4,
        "parentId": "630",
        "avgRatingString": "4.4",
        "totalRatingsString": "74K+",
        "sla": {
          "deliveryTime": 29,
          "lastMileTravel": 4.2,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "4.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-17 06:45:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Burger.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹549",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.1",
            "ratingCount": "12K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-7ff67889-8798-4cfd-b89d-024f81036f2a"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/mcdonalds-hsr-layout-rest23682",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "596949",
        "name": "Olio - The Wood Fired Pizzeria",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/3/45e0a49e-3f57-41bd-8a44-8acc7120224f_596949.jpg",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Pizzas",
          "Italian"
        ],
        "avgRating": 4.3,
        "parentId": "11633",
        "avgRatingString": "4.3",
        "totalRatingsString": "1.4K+",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 2.2,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "2.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-17 05:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "newg.png",
              "description": "Gourmet"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Gourmet",
                    "imageId": "newg.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹99"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.2",
            "ratingCount": "252"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-7ff67889-8798-4cfd-b89d-024f81036f2a"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/olio-the-wood-fired-pizzeria-koramangala-rest596949",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "5934",
        "name": "Burger King",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_5934.JPG",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "avgRating": 4.3,
        "parentId": "166",
        "avgRatingString": "4.3",
        "totalRatingsString": "100K+",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 1.6,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "1.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-17 06:55:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
              "description": "bolt!"
            },
            {
              "imageId": "Rxawards/_CATEGORY-Burger.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                  }
                },
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹399",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.2",
            "ratingCount": "4.0K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-7ff67889-8798-4cfd-b89d-024f81036f2a"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/burger-king-koramangala-rest5934",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "10582",
        "name": "Pizza Hut",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/737b12ff-5c41-46eb-af2d-a346f35cb464_10582.jpg",
        "locality": "Maruti Nagar",
        "areaName": "Koramangala",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Pizzas"
        ],
        "avgRating": 4.2,
        "parentId": "721",
        "avgRatingString": "4.2",
        "totalRatingsString": "12K+",
        "sla": {
          "deliveryTime": 19,
          "lastMileTravel": 2.1,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "2.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-17 07:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "ABOVE ₹1799",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.9",
            "ratingCount": "1.0K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-7ff67889-8798-4cfd-b89d-024f81036f2a"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/pizza-hut-maruti-nagar-koramangala-rest10582",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "739117",
        "name": "Boba Bhai",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/7/e0930ae4-82d3-415e-9b37-4ada0ab077a2_739117.jpg",
        "locality": "Industrial Layout ward",
        "areaName": "Kormangla",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Bubble Tea",
          "Burger",
          "Korean",
          "Beverages",
          "Fast Food",
          "Juice and shake"
        ],
        "avgRating": 4.2,
        "parentId": "361235",
        "avgRatingString": "4.2",
        "totalRatingsString": "1.1K+",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 1.2,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "1.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-24 00:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹63"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-7ff67889-8798-4cfd-b89d-024f81036f2a"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/boba-bhai-industrial-layout-ward-kormangla-rest739117",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "739118",
        "name": "Seoul Burgers & Shakes",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/7/63a2b5b2-8f13-4dc6-bd88-0689faa5192c_739118.jpg",
        "locality": "Industrial Layout ward",
        "areaName": "Kormangla",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Burger",
          "Bubble Tea",
          "Fast Food",
          "Beverages",
          "Juice and shake"
        ],
        "avgRating": 4.4,
        "parentId": "372969",
        "avgRatingString": "4.4",
        "totalRatingsString": "746",
        "sla": {
          "deliveryTime": 24,
          "lastMileTravel": 1.2,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "1.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-24 00:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹84"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-7ff67889-8798-4cfd-b89d-024f81036f2a"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/seoul-burgers-and-shakes-industrial-layout-ward-kormangla-rest739118",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "596950",
        "name": "Crusto's - Cheese Burst Pizza By Olio",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/cc8d70d9-302f-4d07-b1b2-e91e0e141455_596950.jpg",
        "locality": "6th Block",
        "areaName": "Koramangala",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Pizzas",
          "Italian"
        ],
        "avgRating": 4.5,
        "parentId": "268955",
        "avgRatingString": "4.5",
        "totalRatingsString": "628",
        "sla": {
          "deliveryTime": 24,
          "lastMileTravel": 2.2,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "2.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-17 05:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹99"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-7ff67889-8798-4cfd-b89d-024f81036f2a"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/crustos-cheese-burst-pizza-by-olio-6th-block-koramangala-rest596950",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "74444",
        "name": "Samosa Party",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/23/da7b84bd-6e62-4c24-a1ce-589ea71a4941_74444.JPG",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹100 for two",
        "cuisines": [
          "Fast Food",
          "Snacks",
          "Beverages",
          "Chaat",
          "North Indian",
          "Street Food",
          "Sweets",
          "Desserts",
          "Punjabi",
          "Bakery"
        ],
        "avgRating": 4.4,
        "parentId": "6364",
        "avgRatingString": "4.4",
        "totalRatingsString": "17K+",
        "sla": {
          "deliveryTime": 15,
          "lastMileTravel": 2.1,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "2.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-24 00:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "3.8",
            "ratingCount": "220"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-7ff67889-8798-4cfd-b89d-024f81036f2a"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/samosa-party-koramangala-rest74444",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "610982",
        "name": "Madno - House of Sundaes",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/2/2dd9da24-723c-4fed-9abb-2bc066c725a7_610982.jpg",
        "locality": "2nd Stage",
        "areaName": "Btm Layout",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Ice Cream",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.2,
        "veg": true,
        "parentId": "264082",
        "avgRatingString": "4.2",
        "totalRatingsString": "178",
        "sla": {
          "deliveryTime": 23,
          "lastMileTravel": 3.9,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "3.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-17 05:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹99"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-7ff67889-8798-4cfd-b89d-024f81036f2a"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/madno-house-of-sundaes-2nd-stage-btm-layout-rest610982",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "192273",
        "name": "McCafe by McDonald's",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/19/1c79ae14-9cc3-4e95-b468-afbec6fe68b4_192273.jpg",
        "locality": "Bommanahalli",
        "areaName": "HSR Layout",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Beverages",
          "Desserts"
        ],
        "avgRating": 4.4,
        "parentId": "8263",
        "avgRatingString": "4.4",
        "totalRatingsString": "155",
        "sla": {
          "deliveryTime": 24,
          "lastMileTravel": 4.2,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "4.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-17 06:45:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-7ff67889-8798-4cfd-b89d-024f81036f2a"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/mccafe-by-mcdonalds-bommanahalli-hsr-layout-rest192273",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "68144",
        "name": "WarmOven Cake & Desserts",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/29/d44b4cae-5218-49a6-8e55-76e44f3b0235_68144.JPG",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Bakery",
          "Desserts",
          "Ice Cream",
          "Beverages",
          "Cakes"
        ],
        "avgRating": 4.4,
        "parentId": "9696",
        "avgRatingString": "4.4",
        "totalRatingsString": "9.2K+",
        "sla": {
          "deliveryTime": 15,
          "lastMileTravel": 0.2,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "0.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-17 07:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
              "description": "bolt!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹299",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "3.5",
            "ratingCount": "149"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-7ff67889-8798-4cfd-b89d-024f81036f2a"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/warmoven-cake-and-desserts-koramangala-rest68144",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "312910",
        "name": "McDonald's Gourmet Burger Collection",
        "cloudinaryImageId": "f5wvlmilpw6e4yyzzwpe",
        "locality": "7th Sector",
        "areaName": "Hsr Layout",
        "costForTwo": "₹600 for two",
        "cuisines": [
          "Burgers",
          "Beverages",
          "Cafe",
          "Desserts"
        ],
        "avgRating": 4.3,
        "parentId": "10761",
        "avgRatingString": "4.3",
        "totalRatingsString": "1.0K+",
        "sla": {
          "deliveryTime": 24,
          "lastMileTravel": 4.2,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "4.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-17 06:45:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-7ff67889-8798-4cfd-b89d-024f81036f2a"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/mcdonalds-gourmet-burger-collection-7th-sector-hsr-layout-rest312910",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "407064",
        "name": "Momo Zone - The Momo Company",
        "cloudinaryImageId": "8c6d80411d9355da849a2e484bb1c7c1",
        "locality": "KHB Colony",
        "areaName": "Koramangala",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Chinese",
          "Tibetan",
          "Fast Food",
          "Momos"
        ],
        "avgRating": 4.2,
        "parentId": "382343",
        "avgRatingString": "4.2",
        "totalRatingsString": "617",
        "sla": {
          "deliveryTime": 24,
          "lastMileTravel": 0.2,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "0.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-17 07:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹299",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-7ff67889-8798-4cfd-b89d-024f81036f2a"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/momo-zone-the-momo-company-khb-colony-koramangala-rest407064",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "442027",
        "name": "Keventers Ice Cream",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/8/afda93b2-bd69-4a42-9adb-cf63da5fc0c4_442027.jpg",
        "locality": "Guru Nanak Road",
        "areaName": "Countryside Layout",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Ice Cream",
          "Desserts"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "272044",
        "avgRatingString": "4.3",
        "totalRatingsString": "430",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 8.4,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "8.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-17 05:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹46"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-7ff67889-8798-4cfd-b89d-024f81036f2a"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/keventers-ice-cream-guru-nanak-road-countryside-layout-rest442027",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "826449",
        "name": "Pastas By Pizza Hut",
        "cloudinaryImageId": "67d17abfeb3a5da6103b9424f6dbe973",
        "locality": "Maruti Nagar",
        "areaName": "Madiwala",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pastas"
        ],
        "avgRating": 3.8,
        "parentId": "306806",
        "avgRatingString": "3.8",
        "totalRatingsString": "111",
        "sla": {
          "deliveryTime": 19,
          "lastMileTravel": 2.1,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "2.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-17 07:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-7ff67889-8798-4cfd-b89d-024f81036f2a"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/pastas-by-pizza-hut-maruti-nagar-madiwala-rest826449",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "75966",
        "name": "Kaati Zone Rolls & Wraps",
        "cloudinaryImageId": "ibmfw10arqzrdibq03mt",
        "locality": "KHB Colony",
        "areaName": "Koramangala",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Fast Food",
          "Bengali",
          "Beverages",
          "Desserts",
          "Rolls"
        ],
        "avgRating": 4,
        "parentId": "248306",
        "avgRatingString": "4.0",
        "totalRatingsString": "3.4K+",
        "sla": {
          "deliveryTime": 17,
          "lastMileTravel": 0.2,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "0.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-17 07:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
              "description": "bolt!"
            }
          ],
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-7ff67889-8798-4cfd-b89d-024f81036f2a"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/kaati-zone-rolls-and-wraps-khb-colony-koramangala-rest75966",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "68137",
        "name": "Cupcake Bliss Cake & Desserts",
        "cloudinaryImageId": "40f193d8b23afb2988489dac1258962f",
        "locality": "6Th Block",
        "areaName": "Koramangala",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Bakery",
          "Desserts",
          "Ice Cream",
          "Beverages",
          "Cakes"
        ],
        "avgRating": 4.3,
        "parentId": "66732",
        "avgRatingString": "4.3",
        "totalRatingsString": "1.2K+",
        "sla": {
          "deliveryTime": 17,
          "lastMileTravel": 0.2,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "0.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-17 07:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
              "description": "bolt!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-7ff67889-8798-4cfd-b89d-024f81036f2a"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/cupcake-bliss-cake-and-desserts-6th-block-koramangala-rest68137",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "408386",
        "name": "NOTO - Ice Creams & Desserts",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/ce20a80d-4d08-45ae-9ae8-bfb83e853343_408386.JPG",
        "locality": "Ejipura",
        "areaName": "Koramangla",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Ice Cream"
        ],
        "avgRating": 4.4,
        "veg": true,
        "parentId": "468478",
        "avgRatingString": "4.4",
        "totalRatingsString": "1.4K+",
        "sla": {
          "deliveryTime": 14,
          "lastMileTravel": 0.2,
          "serviceability": "SERVICEABLE",
          "slaString": "10-15 mins",
          "lastMileTravelString": "0.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-17 05:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
              "description": "bolt!"
            }
          ],
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "brand",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "brand"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-7ff67889-8798-4cfd-b89d-024f81036f2a"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/noto-ice-creams-and-desserts-ejipura-koramangla-rest408386",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "68142",
        "name": "Indiana Burgers",
        "cloudinaryImageId": "sqj2kcjjx6n0ng6te1hp",
        "locality": "6th Block",
        "areaName": "Koramangala",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Burgers",
          "American",
          "Fast Food",
          "Beverages",
          "Desserts"
        ],
        "avgRating": 3.8,
        "parentId": "5714",
        "avgRatingString": "3.8",
        "totalRatingsString": "3.2K+",
        "sla": {
          "deliveryTime": 19,
          "lastMileTravel": 0.2,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "0.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-17 07:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
              "description": "bolt!"
            }
          ],
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹200 OFF",
          "subHeader": "ABOVE ₹899",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-7ff67889-8798-4cfd-b89d-024f81036f2a"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/indiana-burgers-6th-block-koramangala-rest68142",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "93741",
        "name": "Subway",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/2cc798c2-7857-4afa-890d-1f5a9a4bea2e_93741.JPG",
        "locality": "The Nexus Mall",
        "areaName": "Koramangala",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "sandwich",
          "Salads",
          "wrap",
          "Healthy Food"
        ],
        "avgRating": 4.1,
        "parentId": "2",
        "avgRatingString": "4.1",
        "totalRatingsString": "7.4K+",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 2.4,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "2.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-17 05:45:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Sandwiches.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹119"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-7ff67889-8798-4cfd-b89d-024f81036f2a"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/subway-the-nexus-mall-koramangala-rest93741",
        "type": "WEBLINK"
      }
    }
];

const Body = () => ( 
    <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
            {
                restaurants.map((restaurants) => (
                    <RestaurantCard key={restaurants.info.id} {...restaurants}/>
                ))
            }
        </div>
    </div>
);

const AppLayout = () => {
    return (
        <div className="app-layout">
            <Header />
            <Body />
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

