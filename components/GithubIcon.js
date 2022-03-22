import Icon from "./Icon"

const base64Url = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAB0ElEQVRIie3WPWtUQRTG8V8SMEE7C41JDBK1tVZBIgo2QhJBrW0sFNQirZXfQiW+oJUQMJhgI/gJbKy0E7QLRFzBl5i4Fvdec507921XUuWByzJzz3P+58zO7Cw72iYNtIidxCzO4xAm0vlP+IBlLOHj/ypuHHexgW7Ns4lnaWF9aQ5fGwDDp4OZXqG3JB20hea7v9kWOtcnNA9v3PmE4vIexzEs1IAW0riTubkOxpqAY8mHg9WYxj4MpZ+n0/lMI4H/fh10Unz3HmlScU5HA/+GreMHBgPDbNpFqP0twaPBeCjNXaqXit0utoRmWgryrFQFv4+AT/QIPhXkeVcV3ImAh6sMFdoT5OnkX4bfcTjWB3gkGP+zd0LQaiTBdI/g0BfL/Vcrikv9RrH6Ou3G2yDPiyrDfATcxSsNf30k5/V1JMd8lekg1kvg3/AAlzAV+KZwGY/wPeJdx4G6ip/kDFfwPFLAucBzBj9KCu7icR2U5OJfSw2r2IunaeLPuF3iu1MC/aJBt5ku2roWrzb0HI5AN3GhKTTTdfyW/Kc6q35nD0ag19pCM81IljefsEpZzJoeOg01hnv41QD8Ew8Vb6e+NIob2FXyfkDzs76j7dMfXTjhKzmestYAAAAASUVORK5CYII='


const GithubIcon = ({ size='md', className }) => {
  return <Icon src={base64Url} size={size} className={className} />
}

export default GithubIcon;