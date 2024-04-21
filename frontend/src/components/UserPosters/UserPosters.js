import { useNavigate } from 'react-router-dom';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

function CustomCard({ title, description, image, alt }) {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345, marginTop:10,}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => navigate('/users')} >
          Apply
        </Button>
      </CardActions>
    </Card>
  );
}

function UserPosters() {
  return (
    <div>
      <Typography variant="h4" align="center" style={{ marginTop: 60, color: '#2196f3' }}>
        Available Job Vacancies
      </Typography>
    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', margin: 50, marginTop: 75, }}>
      <CustomCard 
        title="Senior Chef"
        description="Join our dynamic culinary team as a Senior Chef, where you'll lead kitchen operations, 
                    supervise staff, and ensure high-quality food production. As a Senior Chef, you'll bring creativity to 
                    menu development and maintain kitchen standards for safety and cleanliness. This position offers a competitive
                    salary starting at $60,000 annually, with potential for bonuses based on performance. Benefits include health 
                    insurance, paid time off,and opportunities for professional development through workshops and training programs."
        image="https://www.onlychefs.co.uk/blog/wp-content/uploads/2016/03/Tips-for-becoming-a-head-chef.png"
        alt="Senior Chef"
      />
      <CustomCard 
        title="Delivery boy"
        description="Become a vital part of our team as a Delivery Boy, responsible for timely and accurate deliveries 
                    to our valued customers. You'll navigate routes efficiently and provide exceptional customer service. This role 
                    offers a starting salary of $25,000 per year, along with tips and mileage reimbursement. Benefits 
                    include flexible scheduling, employee discounts, and opportunities for advancement within the company."
        image="https://media.istockphoto.com/id/1190668042/photo/man-delivering-food-by-bike-in-the-city.jpg?s=612x612&w=0&k=20&c=8ntP-Gfp-3-AiUwOC1uHB805iB-jNpfzN2zoum-Vw5I="
        alt="Delivery boy"
      />
      <CustomCard 
        title="Receptionist"
        description="Join our welcoming team as a Receptionist, where you'll be the first point of
                    contact for our guests, handling inquiries and reservations with professionalism and efficiency. 
                    Your role will also include administrative tasks to support daily operations. We offer a competitive salary
                    of $35,000 annually, along with health benefits,
                    retirement plans, and opportunities for career growth within our organization."
        image="https://nationaltoday.com/wp-content/uploads/2021/05/Receptionists.jpg"
        alt="Receptionist"
      />
      <CustomCard 
        title="waiter"
        description="Embark on a rewarding career as a Waiter, where you'll
                    provide exceptional dining experiences to our guests by taking orders, serving meals, and ensuring 
                    customer satisfaction. This role offers a starting salary of $28,000 per year, plus tips. Additional
                    benefits include flexible scheduling, 
                    employee meals, and opportunities for advancement into supervisory positions."
        image="https://inspire.qa/wp-content/uploads/2024/01/profesional-waiter-in-restaurant-e1706520489906.jpg"
        alt="waiter"
      />
      <CustomCard 
        title="Finance Manager"
        description="Lead our finance team as a Finance Manager, overseeing budgeting, 
                    financial reporting, and strategic planning to ensure the financial health of our organization. 
                    This role offers a competitive salary of $80,000 annually, along with performance-based bonuses and 
                    stock options. Benefits include health insurance, retirement plans,
                    and opportunities for continued education and professional development."
        image="https://www.mitacs.ca/wp-content/uploads/2022/03/MANINNOVATION-SUB-PAGE_FINANCEMGR_IMAGE1_iStock-968943368.jpg"
        alt="Finance Manager"
      />
    </div>
    </div>
  );
}

export default UserPosters;