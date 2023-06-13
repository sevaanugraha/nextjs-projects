import React, { useRef, useState } from "react";
import moment from "moment";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Button } from "@mui/material";
import Link from "next/link";

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

const EventsCalendar = ({events}) => {
  const [value, setValue] = useState(moment());
  const isSameMonth = value.isSame(new Date(), 'month')
  const calendarRef = useRef();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Box
	  	sx={{
			display: 'flex',
			flexWrap:'wrap',
			alignItems: 'center',
			gap: (theme) => theme.typography.pxToRem(8),
			py: (theme) => theme.typography.pxToRem(22),
			mb: (theme) => theme.typography.pxToRem(12),
			justifyContent: 'space-between'
		}}
	  >
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				gap: (theme) => theme.typography.pxToRem(8)
			}}
		>
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				gap: (theme) => theme.typography.pxToRem(8)
			}}
		>
			<IconButton
				size="large"
				color='primary'
				onClick={() => {
					calendarRef.current.calendar.prev();
					setValue(moment(calendarRef.current.calendar.getDate()))
				}}
			>
				<KeyboardArrowLeftIcon fontSize="lg" />
			</IconButton>

			<IconButton
				size="large"
				color='primary'
				onClick={() => {
					calendarRef.current.calendar.next();
					setValue(moment(calendarRef.current.calendar.getDate()))
				}}
			>
				<KeyboardArrowRightIcon fontSize="lg" />
			</IconButton>
		</Box>

        <DatePicker
          views={["month", "year"]}
          value={value}
		  onChange={(value) => {
			setValue(value);
			calendarRef.current.calendar.gotoDate(value.toISOString());
		  }}
          renderInput={(params) => (
            <TextField
              {...params}
              inputProps={{
                ...params.inputProps,
				disabled: true,
				sx: {
					fontSize: (theme) => ({
						xs: theme.typography.pxToRem(22),
						sm: theme.typography.pxToRem(28),
					}),
					p: 0
				},
              }}
              label=""
              variant="standard"
              InputProps={{
                ...params?.InputProps,
                disableUnderline: true,

                sx: {
                  "&, & input": {
                    p: "0px !important",
                  },
                },
              }}
            />
          )}
        />
		</Box>

		<Button
			variant={isSameMonth ? 'contained' : 'outlined'}
			onClick={() => {
				calendarRef.current.calendar.today();
				setValue(moment(calendarRef.current.calendar.getDate()))
			}}
			size='large'
			sx={{
				minWidth: (theme) => theme.typography.pxToRem(140),
				marginLeft: {xs: 'auto'},
                width: {xs: '100%', sm: 'auto' }
			}}
		>
			今日
		</Button>
      </Box>

      <Box
        sx={{
          "& .fc-toolbar": {
            display: "none !important",
          },

		  "& .fc-col-header-cell": {
            color:'#151b22',    
          },

		  "& .fc-list-day": {
            color:'#151b22',    
		  } ,

		  "& .fc-list-day-cushion":{
			backgroundColor: '#969696 !important',
		  },

		  "& .fc-list-event": {
            "&:hover": {
              td: {
                color: "black",
              },
            },
          },

		  "& .fc-daygrid-event": {
			whiteSpace: 'unset'
		  },

		  "& a.fc-event": {
			padding: '4px 6px',
			margin: '4px 0px',
			
			'&, & .next_url': {
				color: (theme) => theme.palette.text.primary + ' !important',
				fontWeight: 300,
				textDecoration: 'unset'
			},

			'&:hover': {
				backgroundColor: 'unset',
			},

			'& .next_url': {
				'&:hover': {
					textDecoration: 'underline',
				}
			}
		  }
        }}
      > 
		{isSmallScreen ? (
          <FullCalendar
			key={isSmallScreen ? 'sm' : 'lg' + '-view'}
            ref={calendarRef}
            plugins={[dayGridPlugin, listPlugin]}
            initialView="listMonth"
            events={events}
            eventContent={renderEventContent}
            height="auto"
            eventClick={(event) => {
              if (event.url) {
                window.open(event.url, "_blank");
                return false;
              }
            }}
          />
		  
        ) : (
          <FullCalendar
		  	key={isSmallScreen ? 'sm' : 'lg' + '-view'}
            ref={calendarRef}
            plugins={[dayGridPlugin, listPlugin]}
            initialView="dayGridMonth"
            events={events}
            eventContent={renderEventContent}
            height="auto"
            eventClick={(event) => {
              if (event.url) {
                window.open(event.url, "_blank");
                return false;
              }
            }}
            noEventsContent
          />
        )}
      </Box>
    </LocalizationProvider>
  );
};

function renderEventContent(eventInfo) {
  return (
    <Link href={eventInfo.event.extendedProps.next_url} passHref>
      <Box
		dangerouslySetInnerHTML={{ __html: eventInfo.event.title }}
		component='a'
		target='__blank'
		className="next_url"
	  />
    </Link>
  );
}

export default EventsCalendar;
