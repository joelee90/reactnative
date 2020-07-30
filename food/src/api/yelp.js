import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer FYt3o_qd-LtnzR5VqUszf6lCm3cqbLzVsBCuGjyP6JJ3WM49Lj8yDRm44IcpwmkGROI6m4ngC6Bf0tU5KqzpV9G16QBD3Q52sfXF2ulGkO97LAdkZXC6JNYeuGQhX3Yx',
  },
});
